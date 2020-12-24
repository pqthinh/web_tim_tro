const dbs = require('./dbs')

const ReportToAdmin = {
    // add report about post to admin
    AddReport : async (req ,res , next) =>{
        let conn 
        const body = req.body , id_member = body.id_member , id_post =  body.id_post , content = body.content 
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `insert into report(id_post,	id_member,	content) values (?, ? ,?  )`
            result = await conn.query(sql, [id_post, id_member, content])
            await conn.commit()
            res.json({msg: "Gui report thanh cong"})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // Lay tat ca cac report cua post
    GetReportPost : async (req ,res , next) =>{
        let conn 
        const body = req.body , id_member = body.id_member ?  `id_member = ${body.id_member}` : " 1 ", id_post =  body.id_post ?  `id_post = ${body.id_post}` : " 1 " , status = body.status? `status = ${body.status}` : " status ='pendding' "
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `select * from report join member on member.id = report.id_member where ${id_member} and ${id_post} and  ${status}`
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
    // gửi thông báo đến người dùng  có thể cả owner và renter
    // thêm vào bảng report to owner
    // chưa làm 
    ActiveReport : async (req, res, next) =>{
        let conn 
        const body = req.body , id = body.id , status = body.status? body.status: "active"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `update report set status = ? where id = ?`
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
    // Gia hạn tin đăng  (cho chủ trọ)
    GiahanTinDang : async (req, res, next) =>{
        let conn 
        const body = req.body , id_member = body.id_member , id_post =  body.id_post , content = body.content || "Gia hạn tin đăng thêm 7 ngày cho tin đnagư này"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `insert into thongbaoadmin(id_post,	id_owner,	content) values (?, ? ,?  )`
            result = await conn.query(sql, [id_post, id_member, content])
            await conn.commit()
            res.json({msg: "Gui report gia han tin thanh cong"})
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

module.exports  = ReportToAdmin