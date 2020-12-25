const dbs = require('./dbs')

const Comment = {
    // add comment to post
    AddComment : async (req ,res , next) =>{
        let conn 
        const body = req.body , id_member = body.id_member , id_post =  body.id_post , comment = body.comment , star = body.star
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `insert into review(id_post,	id_member,	comment, star ) values (?, ? ,? ,? )`
            result = await conn.query(sql, [id_post, id_member, comment,star])
            await conn.commit()
            res.json({msg: "Gui review thanh cong"})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // comment da dc duyet
    GetCommentPost : async (req ,res , next) =>{
        let conn 
        const body = req.body , id_member = (body.id_member ?  `id_member = '${body.id_member}'` : " 1 "), id_post = ( body.id_post ?  `id_post =  '${body.id_post}' `: " 1 " )
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `select * from review join member on member.id = review.id_member where ${id_member} and ${id_post} and status = 'active'`
            result = await conn.query(sql)
            await conn.commit()
            res.json({review: result[0]})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // comment da dc duyet thi khong can nua (penđing với deactive) // de admin co the xem va kich hoat
    GetCommentPostToAdmin : async (req ,res , next) =>{
        let conn 
        // const body = req.body , id_member = body.id_member , id_post =  body.id_post 
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = "select r.*, m.name, m.email, m.phone, m.place , m.avatar, m.createAt, p.id_owner, p.title , p.address, p.duration , p.price , p.views , p.discription, p.images, p.available from review r join member m on m.id = r.id_member join post p on p.postId = r.id_post where not p.available = 'rented' "
            result = await conn.query(sql)
            // console.log(sql)
            await conn.commit()
            res.json({review: result[0]})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    ActiveComment : async (req, res, next) =>{
        let conn 
        const body = req.body , id = body.id , status = body.status? body.status: "active"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `update review set status = ? where id = ?`
            result = await conn.query(sql, [status, id])
            await conn.commit()
            res.json({msg: "Phe duyet commnet ve tin dang"})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
}

module.exports  = Comment