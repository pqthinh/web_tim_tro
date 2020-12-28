import { useState } from "react"
import ListPost from "../ListPost"
import ListPostHorizontal from "../ListPostHorizontal"

export const TabMemberSaveNews = ({news}) =>{
    const [typeShow, setTypeShow] = useState(1)
    const data = news || fake
    
    return (
        <>
            <div className="container">
                <div onClick={()=> setTypeShow(!typeShow)} style={{float: "right"}}>
                    {typeShow?
                    <span><i class="fas fa-th-large"></i></span>:
                    <span><i class="fas fa-th-list"></i></span>}
                </div>

                <div>
                    {typeShow?
                    <ListPost header={"Tin bạn đã lưu"} news={data}/>:
                    <ListPostHorizontal header={"Tin bạn đã lưu"} news={data} />
                    }
                </div>
            </div>
        </>
    )
}

const fake =[
    {
        "postID": 29,
        "roomID": 29,
        "id_owner": 8,
        "title": "Cho thuê cả nhà 4 phòng ngủ",
        "address": "Lê Trọng Tấn, Thanh Xuân, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 10000000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": "Full Nội thất tiện nghi: sàn gỗ,máy giặt, nóng lạnh , gường, tủ, bàn trang điểm,điều hoà, may giặt, kệ bếp tủ bếp, bếp từ, hút mùi, chăn ga gối đêm, bàn ăn, tivi truyền hình cáp....sang trọng, lịch sự. Chỉ cần xách vali đến ở.\r\nCầu thang máy , khoá từ từng phòng",
        "images": "[\"https://cdn.chotot.com/4rjpVQa6-TV5NsKjqt2pPznLhlI6z0-fTkBKvDve1Dc/preset:view/plain/b5c0fc78e4a3faf021d3e064985029a9-2698704523158931228.jpg\",\"https://cdn.chotot.com/lo-zJhS2w9SS57pcL3Er0iLpNBWP0lCa4CRs2he2lnE/preset:view/plain/5e142a9072815d4368b351929ede9532-2698704525329994922.jpg\",\"https://cdn.chotot.com/q4z8HH4KqnZAZJadtQfBMa7I1_JGJ1M0T95staPbgHI/preset:view/plain/6f80594ec7648223b811052d2e87b643-2698704525390366492.jpg\",\"https://cdn.chotot.com/Lt9-s03n1QEtxreNJgS9_v5Y4zSGETKA77EwCuk5_p8/preset:view/plain/cb7de3d6a5dce3dd53b7c8e3a0565ba6-2698704525311167767.jpg\",\"https://cdn.chotot.com/uLyodSUa_WsaPApWpfK-wfR1gsn8p831ktozVs0tnmY/preset:view/plain/bfe6d9e5c46cf8b1692cd6c518307607-2698704525338561100.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T08:17:15.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T08:17:15.000Z",
        "id": 29,
        "roomType": "2",
        "area": 400,
        "shared": 0,
        "bathroom": "0",
        "kitchen": "0",
        "airConditioner": 1,
        "nonglanh": 1,
        "balcony": 1,
        "typeCostElectric": 1,
        "electricity": 3000,
        "water": 25000,
        "near_place": "[\"Bảo tàng Phòng Không Không Quân\"]",
        "other": null,
        "name": "Nguyen Tram",
        "email": "tramnguyen@gmail.com",
        "phone": "0567891012",
        "place": "Bắc Giang",
        "cmt": "1234567219",
        "password": "123456",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    },
    {
        "postID": 20,
        "roomID": 20,
        "id_owner": 8,
        "title": "Phòng trọ giá rẻ",
        "address": "Hồ Tùng Mậu, Cầu Giấy, Hà Nội",
        "duration": 7,
        "quantity": 1,
        "price": 5500000,
        "tiencoc": 0,
        "views": 1,
        "like": 1,
        "discription": null,
        "images": "[\"https://cdn.chotot.com/7d8CCiJ93u7tTCXDAVfviCNo7pEKazyEamJ2um31GeM/preset:view/plain/064f69ab5bff963cb130e1fc7a215f46-2698945831614429744.jpg\",\"https://cdn.chotot.com/f5zX_JBBb_kzLIS8RGaDizpp6JdcILjaAf9pRrFvP3o/preset:view/plain/23c5131713db5e287fe8f1f0a7fa4188-2698945832624629360.jpg\",\"https://cdn.chotot.com/D51Kmv7x6Yz8eSrtJ_oFHHftMx87GAdElo1H6MbvBKQ/preset:view/plain/54ccf8f5c4db011b18ce3c1bf9ac0829-2698945833173356205.jpg\",\"https://cdn.chotot.com/ZreSqVbqerXu4v0rJQUbJNhuEHSWURYcfANj1eNhb-E/preset:view/plain/7c470a3bb2c70e9a88e1c0778ef983fd-2698945834352813680.jpg\",\"https://cdn.chotot.com/YWFLVlzrJB9vWKfWhTolZjRGYa5MnF6Ug8n8Krktlts/preset:view/plain/9900bc5c5b5ddc39501c6bab1cb9c455-2698945834682424723.jpg\"]",
        "available": "not rented",
        "createAt": "2020-12-24T08:17:15.000Z",
        "status": "pendding",
        "updateAt": "2020-12-24T08:17:15.000Z",
        "id": 20,
        "roomType": "0",
        "area": 40,
        "shared": 0,
        "bathroom": "1",
        "kitchen": "0",
        "airConditioner": 0,
        "nonglanh": 1,
        "balcony": 0,
        "typeCostElectric": 1,
        "electricity": 4000,
        "water": 35000,
        "near_place": "[\"Đại học Thương Mại\"]",
        "other": null,
        "name": "Nguyen Tram",
        "email": "tramnguyen@gmail.com",
        "phone": "0567891012",
        "place": "Bắc Giang",
        "cmt": "1234567219",
        "password": "123456",
        "avatar": "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
    }
]