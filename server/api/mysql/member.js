const dbs = require('./dbs')
const utils = require('../../utils')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const nodemailer = require("nodemailer")
const USERMAIL =  require('../../inforemail')

// member  
// renter login / add / update info / reset pass
// owner  login / add */ update info */ reset pass

const Member = {
    // Member controller
    getmember: async (req, res, next) => {
        if(req.userData.role !== "admin")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `select * from member`
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
    getMemberID: async (req, res, next)=>{
        if(req.userData.role !== "admin")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            // const body = req.body, uid = body.uid
            uid = req.params.id
            let sql, result
            sql = `select * from member where id = ?`

            result = await conn.query(sql, [uid])
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
    // Chua test
    Search: async (req, res, next)=>{
        if(req.userData.role !== "admin")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            var body = req.body, uid = body.id , uname =  body.name , uphone = body.phone , uemail = body.email, udate1 =  body.date1, udate2 = body.date2, place= body.place
            let sql, result, con_id, con_name, con_phone, con_date, con_place, email
            !uid && typeof uid !== "undefined"? con_id= `id = ${uid}` : con_id =" 1 "
            typeof uname !== "undefined" ? con_name= ` name like '%${uname}%'` : con_name= " 1 "
            typeof uphone !== "undefined" ? con_phone= ` phone like '%${uphone}%'` :con_phone=  " 1 "
            // udate1=udate1?udate1: '2020-1-1'
            // udate2=udate2?udate2: new Date()
            // con_date = `createAt  between '${udate1}' and '${udate2}' `
            typeof uemail !== "undefined" ? email= `email like '%${uemail}%'` : email= " 1 "
            con_place = place? `place like '%${place}%'` : con_place = " 1 "
            sql = `select * from member where  ${con_id} and ${email} and ${con_name} and ${con_phone} and  ${con_place}`
            console.log(sql)
            result = await conn.query(sql, [uid, uname, uphone, uemail, place])
            
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
    addMember: async (req, res, next)=>{
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body, uid = body.uid , uname =  body.name , upass = body.password , email = body.email, uphone = body.phone , uplace = body.place
            let sqlcheckexist
            // Sua lai truy van
            if(!email ||  !uname || !upass ) 
                return res.status(400).json({
                    error: true,
                    message: "Ten, email password la truong bat buoc nhap"
                });

            sqlcheckexist = "select * from member where email=? or phone=?"
            resCheckExist = await conn.query(sqlcheckexist, [email, uphone])
            await conn.commit()

            if(resCheckExist[0].length> 0) 
                return res.status(401).json({
                    error: true,
                    message: "Email hoac sdt da duoc su dung"
                });
            else {
                // Inser into table admin
                let sql, result

                // // Hash password
                const myPlaintextPassword = upass;
                const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

                sql = `insert into member(name, email,phone,place, password) value(?,?,?,?,?)`
                result = await conn.query(sql, [uname, email,uphone,uplace, hash])
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
    // Dung cho ca thanh vien va nguoi cho thue nha
    // chua test
    updateMember: async (req, res, next) =>{
        if(req.userData.role === "owner")
            res.status(403).send({ message: 'Authentication failed!' });

        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            var body = req.body, uname =  body.name ,newpass = body.newpass , oldpass = body.oldpass , email = body.email, uphone = body.phone , uplace = body.place
            if(!uname && !uphone && !uplace) 
                return res.status(400).json({msg: "Khong co su thay doi"})

            let sqlcheckexist = "select * from member where email=?"
            resCheckExist = await conn.query(sqlcheckexist, [email])
            await conn.commit()

            if(resCheckExist[0].length == 0) {
                return res.status(401).json({
                    error: true,
                    message: "Phat hien gian lan"
                });
            } else if(resCheckExist[0].length > 1){
                return res.status(401).json({
                    error: true,
                    message: "Loi he thong"
                });
            } else {
                // check password
                const hash = resCheckExist[0][0].password
                if(!bcrypt.compareSync(oldpass, hash)) {
                    return res.status(401).json({
                        error: true,
                        message: "Nhap sai mat khau cu."
                    });
                }
                // Inser into table admin
                let sql, result

                // // Hash password
                newpass = !newpass? oldpass: newpass
                const myPlaintextPassword = newpass;
                const hash1 = bcrypt.hashSync(myPlaintextPassword, saltRounds);

                sql = `update member set name= ?,phone = ?,place = ?, password = ? where email = ?`
                result = await conn.query(sql, [uname,uphone,uplace, hash1, email])
                await conn.commit()
                
                res.json({ status: "Update success" });
            }
            
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    loginMember: async (req, res, next) => {
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body, uemail = body.email , upassword =  body.password 
            if (!uemail || !upassword) {
                return res.status(400).json({
                  error: true,
                  message: "Username or Password required."
                });
            }
            
            sql = `select * from member where email =?`
            result = await conn.query(sql, [uemail ])
            await conn.commit()

            if(result[0].length == 0) {
                return res.status(401).json({
                    error: true,
                    message: "Khong tim thay email."
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
                        message: "Password nhap khong dung."
                    });
                }

            }
            // generate token
            const token = utils.generateToken(result[0][0]);
            // get basic user details
            const userObj = utils.getCleanUser(result[0][0]);
            userObj.role= "member"
            // return the token along with user details
            // console.log(userObj)
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
    sendEmailResetPass : async (req, res, next) => {
        const newpass =  Math.random().toString(36).slice(-12);
        const emailto =  req.body.email


        let sqlcheckexist = "select * from member where email=?"
        resCheckExist = await conn.query(sqlcheckexist, [emailto])
        await conn.commit()

        if(resCheckExist[0].length == 0) {
            return res.status(401).json({
                error: true,
                message: "Khong tim thay email trong he thong"
            });
        } else if(resCheckExist[0].length > 1){
            return res.status(401).json({
                error: true,
                message: "Loi he thong"
            });
        }


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: USERMAIL.user ,            
              pass: USERMAIL.pass 
            }
        });
        var mailOptions = {
            from: USERMAIL.user,
            to: emailto,
            subject: 'Reset password of app rentalhouse',
            html: `<h1>Welcome</h1> <p>New password:<span style="background: #f0f0f0" > ${newpass} </span> </p> <br/> Let create new password!`
        };
        // send email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        // Cap nhat mat khau moi vao csdl
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()

            let sql
            const myPlaintextPassword = newpass;
            const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

            sql = `update member set password = ?  where email = ? `
            await conn.query(sql, [hash, emailto])
            await conn.commit()
            res.json({ status: "200 OK", msg: "Check your email to reset password" });
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

module.exports = Member