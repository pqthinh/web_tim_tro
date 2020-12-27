const dbs = require("./dbs")
var fs = require('fs');
const baseUrl = "http://localhost:4000"

const Post = {
    getDetail: async (req, res, next) =>{
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, id_post =req.params.id
            sql = `SELECT * FROM post join room on post.roomID = room.id join owner on post.id_owner = owner.id_owner where postId=?`
            console.log(sql)
            result = await conn.query(sql, [id_post])
            res.json(result[0][0])
            await conn.commit()
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    countView:  async (req, res, next) =>{ 
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, id_post =req.params.id
            sql = `update post set views = views +1 where postID = ?`
            console.log(sql)
            result = await conn.query(sql, [id_post])
            res.json({msg: "+1"})
            await conn.commit()
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    countLike:  async (req, res, next) =>{ 
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, id_post =req.params.id
            sql = "update post set `like` = `like` +1 where postID = ?"
            console.log(sql)
            result = await conn.query(sql, [id_post])
            res.json({msg: "+1 like"})
            await conn.commit()
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    getAllPostActive: async (req, res, next) =>{ 
        let conn
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result, con = ""
            let filter = req.params.type
            // sap tin theo view
            // theo thoi gian 
            // all

            if(filter==0) con = ` order by p.updateAt `
            if(filter==1) con = ` order by p.views desc  limit 8`
            if(filter==2) con = ` order by p.like desc  limit 8`
            // if(filter===0) con = ` order by p.updateAt `
            sql = `select * from post p join room r on p.roomid = r.id join owner o on o.id_owner = p.id_owner where datediff(CURRENT_DATE, p.updateAt) < p.duration and p.status ='active' ${con}`
            console.log(sql)
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
    getAllInfor: async (req, res , next) =>{
        let con
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `SELECT * FROM post join room on post.roomID = room.id join owner on post.id_owner = owner.id_owner `
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
    getAllInforPost: async (req, res , next) =>{
        let con
        let body = req.body , id_owner = body.id_owner, status= body.status, available = body.available
        status =  status? status : "active"   // active / deactive / pending
        // not rented // rented
        available =  available ? available : "not rented"
        let consql = available==="rented" ? `post.available = 'rented' ` : `post.available = 'not rented' and datediff(CURRENT_DATE, post.updateAt) < post.duration ` 
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql, result
            sql = `SELECT * FROM post join room on post.roomID = room.id join owner on post.id_owner = owner.id_owner where post.id_owner = ? and post.status = ? and ${consql} `
            console.log(sql)

            result = await conn.query(sql, [id_owner, status, available])
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
    // Lay dang sach tin theo id nguoi cho thue
    // tin het han
    getPostOwner: async (req, res , next) =>{
        let con
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            const body = req.body , id_owner = body.id_owner
            let sql, result
            sql = `SELECT * FROM post join room on post.roomID = room.id join owner on post.id_owner = owner.id_owner where owner.id_owner = ? and datediff(CURRENT_DATE, post.updateAt) > post.duration `
            console.log(sql)
            result = await conn.query(sql, [id_owner])
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
    // Lay thong tin phong

    // Tin dang cho duyet
    // Tin da cho thue
    // Tin het han dang bai
    // theo trạng thái của bài đăng : pendding / active / exprice  / deactive

    // nếu truyền id vào body thì tìm theo id người bán

    // search post
    // address:  value.address,
    // nearby: value.nearby,
    // roomType: value.typeroom,
    // area: area,
    // price: cost,
    // shared: value.with_owner,
    // bathroom: value.bathroom,
    // nonglanh: value.heater,
    // kitchen: value.kitchen,
    // airConditioner: value.airconditional,
    // balcony: value.balcony,
    // typeCostElectric: value.electric_water_price,
    // sort: value.sort
    SearchPost:  async (req, res, next)=>{
        console.log(req.body)
        let conn
        let body = req.body, status = body.status , place =  body.address , sort = body.sort , roomType = body.roomType , shared =  body.shared , bathroom = body.bathroom , nonglanh =  body.nonglanh ,kitchen = body.kitchen, airConditioner=body.airConditioner ,  balcony= body.balcony , typeCostElectric = body.typeCostElectric , area = body.area , price = body.price
        // {"roomType":"2","area":[10,49],"price":[100000,4100000],"shared":"0","bathroom":"0","nonglanh":"1","kitchen":"1","airConditioner":"1","balcony":"0","typeCostElectric":"1","sort":"1"}        
        
        status= status? status: "active"
        place = place? `p.address like '%${place}%' or r.near_place like '%${place}%' ` : " 1 "
        sort = sort === 0 ? ' order by p.price '  : sort === 1 ? ' order by p.updateAt desc '  : sort === 2 ? ' order by p.view desc ' : ''
        roomType = roomType? `r.roomType = ${roomType}` : " 1 "
        shared = shared ?  `r.shared = ${shared}` : " 1 "
        bathroom = bathroom? `r.bathroom = ${bathroom}` : " 1 "
        nonglanh = nonglanh? `r.nonglanh = ${nonglanh}` : " 1 "
        kitchen = kitchen? `r.kitchen = ${kitchen}` : " 1 "
        airConditioner = airConditioner? `r.airConditioner = ${airConditioner}` : " 1 "
        balcony = balcony? `r.balcony = ${balcony}` : " 1 "
        typeCostElectric = typeCostElectric? `r.typeCostElectric = ${typeCostElectric}` : " 1 "

        areacon = area && typeof area === "undefined"? ` r.area between ${area[0]} and ${area[1]} ` : " 1 "
        priceconn = price && typeof price === "undefined"?  ` p.price between ${price[0]} and ${price[1]} ` : " 1 "

        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            let sql = `select * from post p join room r on p.roomId = r.id join owner o on o.id_owner= p.id_owner where p.status = ? and ${place} and  ${roomType} and ${shared} and ${bathroom} and ${nonglanh} and ${kitchen} and ${airConditioner} and ${balcony} and ${typeCostElectric} and ${areacon}and ${priceconn} ${sort}`
            console.log(sql)
            const result = await conn.query(sql, [status])
            await conn.commit()

            res.json(result[0])
        }
        catch(err) {
            await conn.rollback()
            next()
        }
        finally {
            await conn.release()
        }
    },

    // Them tin dang
    // 1: Them thong tin phong (bang room)
    // 2: Thong tin post      (bang post)
    createPost : async(req, res, next) =>{
        let conn

        const body = req.body 
        const data = body.file
        // post anh len server
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


        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            
            const id_owner = body.id_owner, typeRoom = body.roomType , area=  body.area, chungchu = body.shared , bathroom = body.bathroom , kitchen = body.kitchen, dieuhoa = body.airConditioner , nonglanh = body.nonglanh, bancong = body.balcony , diennuoc = body.typeCostElectric || 0 , dien = body.electricity , nuoc = body.water , nearby =  body.nearby, other = body.other

            const address = body.address , thoihan  = body.duration , quantity = body.quantity , price = body.price , tiencoc= body.tiencoc, discription = body.discription , images = arr ,title = body.title
            // create room   data : ('phòng trọ', '15', '1', 'phòng tắm riêng, vệ sinh khép kín', 'có bếp riêng', '0', '1', '1', '0', '0', NULL)
            let room = "INSERT INTO `room` ( `roomType`, `area`, `shared`, `bathroom`, `kitchen`, `airConditioner`,`nonglanh`, `balcony`, `typeCostElectric`, `electricity`, `water`, `near_place`, `other`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) "


            // let room =  `INSERT INTO room ( roomType, area, shared, bathroom, kitchen, airConditioner, nonglanh, balcony, typeCostElectric, electricity, water, near_place, other) VALUES ( '${typeRoom}' , '${area}' , '${chungchu}' , '${bathroom}' , '${kitchen}' , '${dieuhoa}' , '${nonglanh}' , '${bancong}' , '${diennuoc}' , '${dien}' , '${nuoc}' , '${nearby}' , '${other}');`
            
            const resroom = await conn.query(room, [typeRoom, area, chungchu, bathroom, kitchen, dieuhoa,nonglanh, bancong, diennuoc, dien, nuoc, JSON.stringify(nearby), other])
            // const resroom = await conn.query(room)
            console.log(room)
            await conn.commit()
            let id_room  = resroom[0].insertId
            console.log("create room id: "+ id_room)

            // create post
            // const address = body.address , thoihan  = body.duration , quantity = body.quantity , price = body.price , tiencoc= body.tiencoc, discription = body.discription , images = arr ,title = body.title
            // data post: (`postID`, `roomID`, `id_owner`, `address`, `duration`, `quantity`, `price`, `available`, `views`, `status`, `discription`, `images`, `createAt`, `updateAt`) :(NULL, '2', '1', 'Me Tri ha, Nam Tu Liem, Ha Noi', '7', '1', '4000000', 'not rented', '1', 'pending', NULL, 'http://localhost:4000/data/logo/logo.png', current_timestamp(), current_timestamp()) 

            let post  =  "INSERT INTO `post` ( `roomID`, `id_owner`,`title`, `address`, `duration`, `quantity`, `price`,`tiencoc`, `discription`, `images`) VALUES  (?,?,?,?,?,?,?,?,?,?)"

            const respost = await conn.query(post, [id_room, id_owner, title, address, thoihan, quantity, price,tiencoc, discription, JSON.stringify(images)])
            
            await conn.commit()
            const id_post = respost[0].insertId

            console.log("create post id: "+ id_post)

            res.status(200).json({msg : `Them Post id = ${id_post} thanh cong `})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },  
    update : async (req, res, next) =>{
        let conn
        const body = req.body 

        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()
            
            const postID = body.postID, roomid =  body.roomId, typeRoom = body.roomType , area=  body.area, chungchu = body.shared , bathroom = body.bathroom , kitchen = body.kitchen, dieuhoa = body.airConditioner , bancong = body.balcony , diennuoc = body.typeCostElectric , dien = body.electricity , nuoc = body.water , nearby =  body.nearby
            
            // Check tin da duyet hay chua

            let check = "select * from post where postId=? and status = 'pendding' and available  = 'not rented' "
            var temp  = await conn.query(check, [postID])
            await conn.commit()
            if(temp[0].length != 1)
                return res.status(401).json({msg: "Tin nay da duoc duyet hoac da cha thue"})
            
            // create room   data : ('phòng trọ', '15', '1', 'phòng tắm riêng, vệ sinh khéo kín', 'có bếp riêng', '0', '1', '1', '0', '0', NULL)
            let room = "update `room` set `roomType` = ? , `area` = ? , `shared` = ? , `bathroom` = ? , `kitchen` = ? , `airConditioner` = ?, `balcony` = ?, `typeCostElectric` = ?, `electricity` = ?, `water` = ?, `near_place` = ? , updateAt = CURRENT_DATE() where id = ? "
            
            await conn.query(room, [typeRoom, area, chungchu, bathroom, kitchen, dieuhoa, bancong, diennuoc, dien, nuoc, nearby, roomid])
            await conn.commit()

            console.log(room)

            // create post
            const address = body.address , thoihan  = body.duration , quantity = body.quantity , price = body.price , discription = body.discription 
            // data post: (`postID`, `roomID`, `id_owner`, `address`, `duration`, `quantity`, `price`, `available`, `views`, `status`, `discription`, `images`, `createAt`, `updateAt`) :(NULL, '2', '1', 'Me Tri ha, Nam Tu Liem, Ha Noi', '7', '1', '4000000', 'not rented', '1', 'pending', NULL, 'http://localhost:4000/data/logo/logo.png', current_timestamp(), current_timestamp()) 

            let post  =  "update `post` set  `address`= ?, `duration`= ?, `quantity`= ?, `price`= ?, `discription`= ?, updateAt = CURRENT_DATE() where postID = ? "

            await conn.query(post, [address, thoihan, quantity, price, discription, postID])
            await conn.commit()

            res.status(200).json({msg : `Sua Post id = ${postID} thanh cong `})
        }
        catch (err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    updateAnh: async( req, res, next)=>{
        let conn
        const body = req.body 
        const data = body.file, postID = body.postID
        // post anh len server
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

        // Cap nhat vao tin dang
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()

            let sql = " update post set images = ? where  postid =?"
            await conn.query(sql, [JSON.stringify(arr), postID])
            await conn.commit()
            res.json({msg: `Cap nhat anh cho tin ${postID} thanh cong`})
        }
        catch(err) {
            await con.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    updateAvailablePost :  async (req, res, next) =>{
        let conn 
        const body = req.body ,id = body.postID
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()

            let sql  = "update post set status = 'rented' where postID = ?"
            await conn.query(sql, [status, id])
            await conn.commit()
            res.status(200).json({
                msg: `post id ${id} duoc danh dau la da cho thue`
            })

        }
        catch(err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // admin
    // status of post  (active)
    updateStatusPost : async (req, res, next) =>{
        let conn 
        const body = req.body , status = body.status , id = body.postID
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()

            let sql  = "update post set status = ? where postID = ?"
            await conn.query(sql, [status, id])
            await conn.commit()
            res.status(200).json({
                msg: `${status } post id ${id}`
            })

        }
        catch(err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
    // Gia han tin dang
    updateDurationPost : async (req, res, next) =>{
        let conn 
        const body = req.body , day = body.duration , id = body.id_post
        try {
            conn = await dbs.getConnection()
            await conn.beginTransaction()

            let sql  = "update post set duration = ? , updateAt = CURRENT_DATE() where postID = ?"
            await conn.query(sql, [day, id])
            await conn.commit()
            res.status(200).json({
                msg: `Them ${day } days for post id ${id}`
            })

        }
        catch(err) {
            await conn.rollback()
            next(err)
        }
        finally {
            await conn.release()
        }
    },
}

module.exports = Post