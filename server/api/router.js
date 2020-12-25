const express =  require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({ message: "Home api of app" });
});

//check token
const token  = require('./mysql/tokencheck');
router.get('/verifyToken', token.checkToken)

const auth = require('./mysql/tokencheck').auth

// post
const post = require('./mysql/post')
router.get("/post/infor" , post.getPost)         // tat ca cac tin torng bang post
router.get('/post/all', post.getAllInforPost)   // thong tin chi tiet cua bai dang (user + room + thong tin bai dang)
router.post('/post/create', post.createPost)    // upload anh len server truoc
// post tin body request: room :: id_owner, typeRoom ,area, chungchu , bathroom , kitchen, dieuhoa , bancong , diennuoc ,dien , nuoc , nearby
// post:: address ,thoihan ,quantity ,price , discription , images(array lay dc sau khi upload anh)
router.post('/post/search', post.SearchPost)    // Chưa viết xong
router.post('/post/update', post.update)        // Update thong tin ve post , va room // khong update anh
router.post('/post/update/anh', post.updateAnh) 
router.get('/post/owner', post.getPostOwner)    // body: id_owner
router.post('/post/owner/state', post.updateAvailablePost)   // id of post 
router.post('/post/admin/status', post.updateStatusPost)     // status of post : (active, inactive, expire)
router.post('/post/admin/duration', post.updateDurationPost)   // status of post : (active, inactive, expire)

//image of room
const img = require('./mysql/imagesroom')
router.get("/images/room", img.getAll)
router.get("/images/room/:idpost", img.getAll)
router.post("/images/upload", img.addImageFile)                     // file :  truyeenf qua formdata
router.post("/images/upload/base64", img.addImageBase64)            // anh dang base 64 encodeing

// user in db
// const user = require('./mysql/user')
// router.get("/user/member", user.getmember)                  // danh sach nguoi di thue
// router.get("/user/owner", user.getowner)                     // danh sach nguoi cho thue
// router.post('/user/forgotpass', user.sendEmailResetPass)     // email

//owner
const owner = require('./mysql/owner')
router.get('/user/owner' ,auth , owner.getowner)
router.get('/user/owner/get/:id',auth , owner.getOwnerID) 
router.post('/user/member/search',auth , owner.Search)            // body req : id , email , password , phone , name, place ,cmt , status (state)
router.post('/user/owner/repass', owner.UpdatePassOwner)    // newpass, email , oldpass
router.post('/user/owner/signup', owner.AddOwner)            // name , password ,email, phone ,place,  cmt
router.post('/user/owner/forgotpass', owner.sendEmailResetPass)  // body req :email
router.post('/user/owner/login', owner.loginOwner)            // email, pass  (pass: pqthinh)
router.post('/user/owner/Status',auth , owner.StatusOwner)          // id_owner , status pendding => (active / deactive)
router.post('/user/owner/update',auth , owner.updateOwner)   // name , newpass ,oldpass , email, .phone , place ,cmt

// member
const member  = require('./mysql/member')
router.get('/user/member',auth , member.getmember)                       // all member
router.get('/user/member/:id',auth , member.getMemberID)                  // params : id
router.post('/user/member/search',auth , member.Search)                   // body req : id , email , password , phone , name, place ,date1, date2
router.post('/user/member/login', member.loginMember)               // body req : email , password 
router.post('/user/member/signup', member.addMember)               // body req : email , password , phone , name, place
router.post('/user/member/forgotpass', member.sendEmailResetPass)  // body req :email
router.post('/user/member/update', member.updateMember)            // body: name ,newpass ,oldpass ,email, phone , place

// admin
const admin = require('./mysql/admin')
router.get("/user/admin", auth , admin.getadmin)
router.post("/user/admin/login", admin.loginAdmin)      // {"username":"admin","password":"admin"}       // http://localhost:4000/api/user/admin/login
router.post("/user/admin/signup", admin.signupAdmin)    // {"username":"pqthihnh", "name": "Pham Quang Thinh", "password": "12345"}  // http://localhost:4000/api/user/admin/signup
router.post("/user/admin/:id", auth , admin.editDataAdmin)      // {"username":"pqthinh", "name": "Pham Quangfssdf Thinh", "password": "12345"} // http://localhost:4000/api/user/admin/3

// Comment + Review
const comment = require('./mysql/comment')
router.get('/comment/post', comment.GetCommentPost)   // body request :  id_post (null)  , id_member (null)  // lay thong tin tin dang theo id_post | xem cac binh luan cua 1 nguoi
router.post('/comment/post', comment.AddComment )    // body request :  id_post  , id_member  , comment , star
//for admin (lay comment dang cho duyet va active hoac huy)
router.get('/comment/admin/all', comment.GetCommentPostToAdmin)    // lay het comment cho duyet
router.post('/comment/admin/check', comment.ActiveComment)        // id = body.id , status = body.status? body.status: "active" | "deactive"   có thể hủy trnagj thái của comment (deactive)

// Report về tin 
const report  = require('./mysql/reportToAdmin')
router.get("/report/all", report.GetReportPost)     // truyền vào id_port hoặc id_member có thể lấy trạng thái của report (active / pendding / huy)
router.post("/report/add", report.AddReport)        // id_member , id_post , content 
router.post("/report/handle", report.ActiveReport)  // active report ve tin dang      : id (report)
router.post("/report/giahan", report.GiahanTinDang)  // Gia han tin dang tu owner gui len

// notification (thong bao cho chu tro va nguoi di thue ve tin dang / comment)
const notification = require('./mysql/reportTocustomer')
router.post("/notification/post/state" , notification.ThongbaoTrangThaiTin)
router.post("/notification/post/giahan" ,  notification.GiahanThanhCong)
router.get("/notification" , notification.GetNotification)   // id : id_owner , role : "onwer" 

// Lưu tin 
const SaveNews = require('./mysql/SaveNews')                // id_post , id_member
router.post("/save/post", SaveNews.SaveNews)     
router.post("/remove/post", SaveNews.RemoveNews)

module.exports = router