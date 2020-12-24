const mysql = require('mysql2/promise')
var fs = require('fs');
const baseUrl = "http://192.168.101.109:4000"
const dbs =  require("./dbs")

const Service = {
    getAll: async (req, res, next)=>{
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `SELECT * FROM imagelist `
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
    // Ham addImage file để move file tờ client gửi lên vào thư mục data/upload/image để bên server có thể đọc được và gửi đến client
    addImageFile: async (req, res, next) =>{
        console.log(req.files)
        // console.log(req.body.file.length)
        if (req.files === null) {
            console.log("nullllllllllll")
            return res.status(404).json({ msg: 'No file uploaded' });
        }
        const file = req.files.file;
        var arr = []
        if(file.length>1)
            file.map(x=> {
                var link = `data/uploads/image/${new Date().getTime() +"_"+ x.name}`
                x.mv(`${__dirname}/../../${link}`, err => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send(err);
                    }
                });
                arr.push(`${baseUrl}/${link}`)
            })
        else {
            var link = `data/uploads/image/${new Date().getTime() +"_"+ file.name}`
            file.mv(`${__dirname}/../../${link}`, err => {
                if (err) {
                    console.error(err);
                    return res.status(500).send(err);
                }
            });
            arr.push( `${baseUrl}/${link}`)
        }
        console.log(arr)
        res.json({status: "200 Ok", path: arr});

    },
    // doc file base64code gui qua body request
    addImageBase64: async (req, res, next)=>{
        const data = req.body.file
        function base64_decode(base64str, file) {
            var bitmap = new Buffer(base64str, 'base64');
            fs.writeFileSync(file, bitmap);
        }
        var arr = []
        for(const key in data ) {
            var imagebase64 = data[key].split(',')[1]
            const link = `data/uploads/image/${new Date().getTime() +"_"+ key}`
            base64_decode( imagebase64, `${__dirname}/../../${link}.jpg`);
            arr.push(`${baseUrl}/${link}.jpg`)
        }
        console.log(arr)
        // Chen anh vao csdl
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            const id_tin = req.body.idtin || 1
            sql = `insert into imagelist (id_post, link) values ( '${id_tin}' , '${arr}' ) `
            result = await conn.query(sql)
            await conn.commit()
            console.log(sql, arr)
            res.json({msg: "success", path: arr})
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
module.exports = Service