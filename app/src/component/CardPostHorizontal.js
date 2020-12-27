
import {  useHistory } from 'react-router-dom'
import './CardPostHorizontal.css'
import post from '../api/post'

const CardPostHorizontal = ({news})=>{
    const data =  news || fake
    const img = JSON.parse(data.images)
    let history = useHistory()
    const increView = async(id) =>{
        await post.countview(id)
    }
    const redirect = (data) => {
        history.push({
            pathname: `post/${data.postID}`,
            news: news
        })
        increView(data.postID)
    }
    return (
        <>  
            <div className="container-card" onClick={()=> redirect(data)}>
                <div className="card-horizontal">
                    <div className="Card-H-img">
                        <img src={img[0]} alt="" class="img-thumbnail rounded" height='60px'/>
                        
                        <div className="Card-img-number">
                            <span className="number">{img.length}</span>
                        </div>
                    </div>
                    <div className="Card-H-content">
                        <div class="cap">
                            <div class="title-1">
                                {data.title}
                            </div>
                            <div class="title-3">
                                <i class="fas fa-coins"></i>
                                <span className="content">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}/tháng</span>
                            </div>
                            <div class="title-2">
                                <i class="fas fa-prescription-bottle"></i>
                                <span className="content">Miêu tả : {data.discription? data.discription.slice(0,20): "Phòng đẹp giá hợp lý"}</span>
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
                    <div className="extends">
                        <span className="chinhsuatin"><i class="fas fa-cog"></i></span>
                        <span className="themvaodanhmucyeuthich"><i class="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPostHorizontal
// <Link to={{
//     pathname:"post/1",
//     state: {news: fake}
// }}>

const fake = {
    "postID": 1,
    "roomID": 1,
    "id_owner": 1,
    "title": "Phòng trọ giá rẻ",
    "address": "Me Tri Ha, Nam Tu Liem, Ha Noi",
    "duration": 22,
    "quantity": 1,
    "price": 2500000,
    "tiencoc": 0,
    "views": 1,
    "like": 1,
    "discription": "✨✨PHÒNG TRỌ GIÁ RẺ CHỈ TỪ - 3.500.000 - 3.700.000- 4.400.000 - 5.200.000 VNĐ/ Tháng ✨✨\r\n\r\n❎❎CAM KẾT VỀ❎❎\r\n✔️ Chất lượng hình ảnh, thông tin chính xác.\r\n✔️ Nhân viên luôn sẵn sàng hỗ trợ tư vấn nhiệt tình.\r\n✔️ Mọi thông tin đều được minh bạch rõ ràng trước khi cho khách ký cọc và làm hợp đồng thuê phòng với chủ nhà.\r\n✔️ Hệ thống mới tinh, dịch vụ chất lượng, nội thất hiện đại với mức giá tốt .\r\n\r\n💥Vị trí :\r\n- KDC Tân Quy gần Lotte Mart Q7\r\n- Nằm trên trục đường Huỳnh Tấn Phát dễ dàng đi chuyển sang Quận 4.\r\nGần Phú Mỹ Hưng, Crescent Mall, KCX Tân Thuận..\r\n\r\n❌❌GIỜ GIẤC TỰ DO 👏🏻👏🏻\r\n\r\n🏆 Nội thất phòng bao gồm:\r\n☑ Máy lạnh\r\n☑ Tủ lạnh\r\n☑ Máy giặt\r\n☑ Máy nóng lạnh\r\n☑ Tủ bếp\r\n☑ Lavabo + vòi nước\r\n☑ Kệ Bếp\r\n\r\n❌ĐẶC BIỆT❌: Có ưu đãi khủng cho khách hàng ở dài hạn!\r\n\r\n💃call/zalo:  Huỳnh Đức để được tư vấn phòng đẹp giá tốt ngay nhé mọi người <3",
    "images": "[\"http://localhost:4000/images/img1.jpg\",\"http://localhost:4000/images/img2.jpg\",\"http://localhost:4000/images/img3.jpg\",\"http://localhost:4000/images/img4.jpg\", \"http://localhost:4000/images/img5.jpg\"]",
    "available": "not rented",
    "createAt": "2020-12-03T00:43:04.000Z",
    "status": "active",
    "updateAt": "2020-12-03T00:43:08.000Z",
    "id": 1,
    "roomType": " Phòng trọ",
    "area": 25,
    "shared": 1,
    "bathroom": "Chung, không có nóng lạnh",
    "kitchen": "Chung",
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
    "phone": "",
    "place": "Thái Thụy - Thái Bình",
    "cmt": "022355568927",
    "password": "$2b$10$IehZD5V7Y1QpO3P6rPTQgOrSe/fFBvBKyFaaMt/iTqDGwOvCqOJIa",
    "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
}