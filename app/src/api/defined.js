const formatMoney = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1000000);

const roomType ={
    "0": "Phòng trọ",
    "1": "Chung cư mini",
    "2": "Nhà nguyên căn",
    "3": "Chung cư"
}
const  bathroom = {
    "0": "Vệ sinh chung",
    "1": "Vệ sinh khép kín"
}

//Respon from server
const postStandart = {
    "postID": 6,
    "roomID": 11,
    "id_owner": 1,
    "title": "Phòng trọ giá rẻ Mễ Trì Hạ",
    "address": "Số 17 ngách 126 ngõ 14 Mễ Trì Hạ, Mễ Trì, Nam Từ Liêm, Hà Nội",
    "duration": 30,
    "quantity": 4,
    "price": 2000000,
    "tiencoc": 1000000,
    "views": 1,
    "discription": null,
    "images": "[\"http://192.168.101.109:4000/data/uploads/image/1608577015647_0.jpg\",\"http://192.168.101.109:4000/data/uploads/image/1608577015651_1.jpg\",\"http://192.168.101.109:4000/data/uploads/image/1608577015653_2.jpg\"]",
    "available": "'not rented'",
    "createAt": "2020-12-03T00:43:04.000Z",
    "status": "deactive",
    "updateAt": "2020-12-03T00:43:08.000Z",
    "id": 11,
    "roomType": "0",
    "area": 20,
    "shared": 1,
    "bathroom": "1",
    "kitchen": "1",
    "airConditioner": 1,
    "nonglanh": 1,
    "balcony": 1,
    "typeCostElectric": 0,
    "electricity": 4000,
    "water": 25000,
    "near_place": "[\"Tòa nhà Keangnam\",\"Cung triển lãm quy hoạch quốc gia\"]",
    "other": "",
    "name": "Phạm Quang Thịnh",
    "email": "thinh@gmamil.com",
    "phone": "0987654321",
    "place": "Thái Thụy - Thái Bình",
    "cmt": "022355568927",
    "password": "$2b$10$X1SD4FHxXQHE8pfRZ/ICouIF6wK3tmI09ZC8kqvoaIZd.igH30eJO"
}

const newspost = {
    "postID": 1,
    "roomID": 1,
    "id_owner": 1,
    "title": "Phòng trọ giá rẻ",
    "address": "Me Tri Ha, Nam Tu Liem, Ha Noi",
    "duration": 7,
    "quantity": 1,
    "price": 2500000,
    "tiencoc": 0,
    "views": 1,
    "discription": "✨✨PHÒNG TRỌ GIÁ RẺ CHỈ TỪ - 3.500.000 - 3.700.000- 4.400.000 - 5.200.000 VNĐ/ Tháng ✨✨\r\n\r\n❎❎CAM KẾT VỀ❎❎\r\n✔️ Chất lượng hình ảnh, thông tin chính xác.\r\n✔️ Nhân viên luôn sẵn sàng hỗ trợ tư vấn nhiệt tình.\r\n✔️ Mọi thông tin đều được minh bạch rõ ràng trước khi cho khách ký cọc và làm hợp đồng thuê phòng với chủ nhà.\r\n✔️ Hệ thống mới tinh, dịch vụ chất lượng, nội thất hiện đại với mức giá tốt .\r\n\r\n💥Vị trí :\r\n- KDC Tân Quy gần Lotte Mart Q7\r\n- Nằm trên trục đường Huỳnh Tấn Phát dễ dàng đi chuyển sang Quận 4.\r\nGần Phú Mỹ Hưng, Crescent Mall, KCX Tân Thuận..\r\n\r\n❌❌GIỜ GIẤC TỰ DO 👏🏻👏🏻\r\n\r\n🏆 Nội thất phòng bao gồm:\r\n☑ Máy lạnh\r\n☑ Tủ lạnh\r\n☑ Máy giặt\r\n☑ Máy nóng lạnh\r\n☑ Tủ bếp\r\n☑ Lavabo + vòi nước\r\n☑ Kệ Bếp\r\n\r\n❌ĐẶC BIỆT❌: Có ưu đãi khủng cho khách hàng ở dài hạn!\r\n\r\n💃call/zalo:  Huỳnh Đức để được tư vấn phòng đẹp giá tốt ngay nhé mọi người <3",
    "images": "http://localhost:4000/data/logo/logo.png",
    "available": "not rented",
    "createAt": "2020-12-03T00:43:04.000Z",
    "status": "deactive",
    "updateAt": "2020-12-03T00:43:08.000Z",
    "id": 1,
    "roomType": " Phòng trọ",
    "area": 25,
    "shared": 1,
    "bathroom": "",
    "kitchen": "",
    "airConditioner": 0,
    "nonglanh": 1,
    "balcony": 0,
    "typeCostElectric": 1,
    "electricity": 0,
    "water": 0,
    "near_place": "tòa nhà KeangNam,BigC the Garden,UBND phường Mễ Trì",
    "other": null,
    "name": "Phạm Quang Thịnh",
    "email": "thinh@gmamil.com",
    "phone": "0987654321",
    "place": "Thái Thụy - Thái Bình",
    "cmt": "022355568927",
    "password": "$2b$10$X1SD4FHxXQHE8pfRZ/ICouIF6wK3tmI09ZC8kqvoaIZd.igH30eJO"
}

const owner = {
    "id_owner": 1,
    "name": "Phạm Quang Thịnh",
    "email": "thinh@gmamil.com",
    "phone": "0987654321",
    "place": "Thái Thụy - Thái Bình",
    "cmt": "022355568927",
    "status": "deactive",
    "password": "$2b$10$X1SD4FHxXQHE8pfRZ/ICouIF6wK3tmI09ZC8kqvoaIZd.igH30eJO",
    "createAt": "2020-12-03T00:43:04.000Z",
    "updateAt": "2020-12-03T00:43:08.000Z"
},

const review = {
    "review": [
        {
            "id": 1,
            "id_post": 1,
            "id_member": 1,
            "comment": "Phòng đẹp \r\nGiá hợp lý với học sinh sinh viên\r\nChủ nhà vui tính, lịch sự",
            "star": 5,
            "status": "active",
            "createAt": "2020-12-03T00:46:44.000Z",
            "name": "pqthinh",
            "email": "pqthinh@gmail.com",
            "phone": "0987654321",
            "place": null,
            "password": "pqthinh",
            "cmt": null,
            "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
            "updateAt": "2020-12-03T00:46:44.000Z"
        }
    ]
}

export default {roomType, bathroom}