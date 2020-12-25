const dbs  = require('./dbs')

const ReporttoCustomer = {
    // Thong bao trang thai cua tin
    ThongbaoTrangThaiTin: async (req, res, next) =>{
        let conn
        const body = req.body ,id_owner = body.id_owner, content = body.content || "Tin của bạn đã được duyệt", warning = body.warning || "Đã thông báo"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql = `insert into thongbao (id_nguoinhan, role, content) values (?, 'owner', ?)`
            const result = await conn.query(sql,[id_owner, content])
            conn.commit()
            res.json({msg: warning})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally{
            await conn.release()
        }
    },
    // Thong bao gia han thanh cong
    GiahanThanhCong : async (req, res, next) =>{
        let conn
        const body = req.body ,id_owner = body.id_owner, content = body.content || "Tin của bạn đã được gia hạn", warning = body.warning || "Thongbao"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql = `insert into thongbao(id_nguoinhan, role, content) values (?, 'owner', ?)`
            const result = await conn.query(sql,[id_owner, content])
            conn.commit()
            res.json({msg: warning})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally{
            await conn.release()
        }
    },
    GetNotification : async(req, res, next)=>{
        let conn
        const body = req.body ,id = body.id? ` id_nguoinhan = ${body.id} ` : " 1 ", role = body.role || "owner"
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql = `select * from thongbao where ${id} and role = ? `
            const result = await conn.query(sql,[role])
            conn.commit()

            res.json(result[0])
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally{
            await conn.release()
        }
    }
}
module.exports = ReporttoCustomer