const dbs = require('./dbs')

const SaveNews = {
    SaveNews: async (req, res, next) =>{
        let conn
        const body = req.body , id_post = body.id_post, id_member = body.id_member
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `insert into favorites (id_post, id_member) values (?, ?)`
            result = await conn.query(sql, [id_post, id_member])
            await conn.commit()
            res.json({msg: `Da them tin ${id_post} vào danh sách yêu thích `})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    RemoveNews : async(req, res, next) =>{
        let conn
        const body = req.body , id_post = body.id_post, id_member = body.id_member
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `update favorites set status = 0 where id_post = ? and id_member = ?`
            result = await conn.query(sql , [id_post, id_member])
            await conn.commit()
            res.json({msg: `Đã xóa tin ${id_post} khỏi danh sách yêu thích `})
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

module.exports = SaveNews