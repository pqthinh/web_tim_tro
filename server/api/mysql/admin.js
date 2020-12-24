const dbs = require('./dbs')
const utils = require('../../utils')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Admin = {
    getadmin: async (req, res, next) => {
        // console.log(req.userData)
        if(req.userData.role !== "admin")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `select * from admin`
            result = await conn.query(sql)
            await conn.commit()
            res.json(result[0])
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // Admin controller
    loginAdmin: async (req, res, next) =>{
        // console.log(req)
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body, uname = body.username , upassword =  body.password 
            if (!uname || !upassword) {
                return res.status(400).json({
                  error: true,
                  message: "Username or Password required."
                });
            }
            
            let sql, result
            // username la duy nhat
            sql = `select * from admin where username =?`
            result = await conn.query(sql, [uname ])
            await conn.commit()

            if(result[0].length == 0) {
                return res.status(401).json({
                    error: true,
                    message: "Username is Wrong."
                });
            } else if(result[0].length > 1){
                return res.status(401).json({
                    error: true,
                    message: "Loi he thong"
                });
            } else {
                // check password
                const hash = result[0][0].password
                if(!bcrypt.compareSync(upassword, hash)) {
                    return res.status(401).json({
                        error: true,
                        message: "Password is Wrong."
                    });
                }

            }
            
            // get basic user details
            const userObj = utils.getCleanUser(result[0][0]);
            userObj.role= "admin"
            // return the token along with user details
            // console.log(userObj)
            // generate token
            const token = utils.generateToken(userObj);

            res.json({ user: userObj, token });
            
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    signupAdmin: async (req, res, next) =>{
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body,uname = body.name, uusername = body.username , upassword =  body.password 
            if (!uname || !upassword || !uusername) {
                return res.status(400).json({
                  error: true,
                  message: "Name, Username , Password required."
                });
            }
            // Check username
            let sql1, result1
            sql1 = `select * from admin where username =? `
            result1 = await conn.query(sql1, [uusername])
            await conn.commit()

            if(result1[0].length > 0) {
                return res.status(401).json({
                    error: true,
                    message: "Username existed"
                });
            }else {
                // Inser into table admin
                let sql, result

                // // Hash password
                const myPlaintextPassword = upassword;
                const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

                sql = `insert into admin(name, username, password) value(?,?,?)`
                result = await conn.query(sql, [uname, uusername, hash])
                await conn.commit()
            }

            res.json({ status: "insert success" });
            
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    editDataAdmin: async (req, res, next)=> {
        if(req.userData.role !== "admin")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body,uname = body.name,uid= req.params.id, uusername = body.username , upassword =  body.password 
            
            if (!uname & !upassword & !uusername) {
                return res.status(400).json({
                  error: true,
                  message: "Data not changed"
                });
            }
            // Check username
            let sql, result
            sql = `update admin set name=?, username =?, password=? where id = ?`
            const myPlaintextPassword = upassword;
            const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
            result = await conn.query(sql, [uname,uusername, hash , uid])
            await conn.commit()

            res.json({ status: "Update success" });
            
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    }
}

module.exports = Admin