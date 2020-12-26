import React from 'react'
import './CardPost.css'
import { Link } from 'react-router-dom'

const CardPost = ({news}) =>{
    // props được thay bằng thông tin giới thiệu của bài đăng đó
    const data = news || fakeNews
    return (
        <>
            <div class="col-6 col-sm-4 col-md-3 cardpost">
                <Link to={{
                    pathname: "/post/2",
                    state: {news: data}
                }}>
                    <div class="room detail-room">
                        <div class="image-room">
                            <div class="image"><img src="images/img1.jpg" alt="can-ho" id="cardPost-img"/></div>
                            <div class="follow"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        </div>
                        <div class="cap">
                            <div class="title-1">
                                {data.title}
                            </div>
                            <div class="title-3">
                                <i class="fas fa-coins"></i>
                                <span className="content">{data.price}/tháng</span>
                            </div>
                            <div class="title-2">
                                <i class="fas fa-house-user"></i>
                                <span className="content">{data.name}</span>
                            </div>
                        </div>
                        <div class="cap-foot">
                            <i class="fas fa-home"></i>
                            <span className="content">{data.address}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardPost

const fakeNews =  {
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