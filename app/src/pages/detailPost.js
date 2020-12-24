import { useHistory , useParams , useLocation} from 'react-router-dom'

import CardUser from '../component/CardUser'
import Padding from '../component/padding'
import Comment from  '../component/Comment'
import './detailPost.css'
import SlideSlick from '../component/SlideSlick'
import { ModalCustom } from '../component/ModalCustom'
import FormReport from '../component/FormReport'
import AddTimeNews from '../component/form/addTimePost'

const DetailPost = ({news}) =>{

	const { id } = useParams()
	const { state } = useLocation()
	alert(JSON.stringify(state))
	alert(id)

	const data = news || fakeNews
	// xu ly dky thi se xac thuc dc nguoi dung hien tai => co id va thong tin nguoi dung  quyen(admin| owner)
	const ReportNews = async(id) =>{
		// goi api them vao bang report tren csdl
		// check quyen truoc *chi renter
	}

	const AddToFav = async(id) =>{
		// goi api add vao bang tin yeu thich
		//check quyen truoc *chi renter

	}

	const ThongBaoGiaHanTin = (data) =>{

	}

    return (
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<h3 className="title-of-details-post" style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Phòng {data.postID}</h3>
				{/* ImageSliderBootstrap truyen vao tham so la images : mang chua link anh */}
				{/* <ImageSliderBoostrap />  */}
				{/* <SliderImg /> */}
				<SlideSlick />
				<div class="content">
					<div class="row">
						<div class="col-9 title-of-details-post">
							<h3>{data.title}</h3>
							Giá:<span class="gia price-news">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}  /tháng</span>
						</div>
						<div class="col-3">
							{/* Button handle event save news to list fav of member */}
							<div class="follow">
								<span class="text-button-modal" >Lưu tin</span> <i class="fa fa-heart-o" aria-hidden="true"></i>
							</div>
							{/* Button report tin dang */}
							<div  class="follow">
								<ModalCustom 
									title="Báo cáo tin đăng"
									button = {<span><span class="text-button-modal" >Báo cáo</span> <i class="far fa-flag"></i> </span>}
									body = {<FormReport />}
									id="modal_report_news"
								/>
							</div>
							{/* Danh cho owner de gia han tin */}
							<div class="follow">
								<ModalCustom 
									title="Gia hạn cho tin đăng"
									button = {<span><span class="text-button-modal" >Gia hạn</span> <i class="far fa-calendar-plus"></i> </span>}
									body = {<AddTimeNews />}
									id="modal_giahan_news"
								/>
							</div>
						</div>						
					</div>
					<span class="location"><i class="fa fa-map-marker" aria-hidden="true"></i><p className="" >{data.address}</p></span>
					<div>
						<p>Miêu tả: </p>
						<pre>
							{data.discription}
						</pre>
					</div>
					<div class="detail">
						<h4>Chi tiết về phòng</h4>
						<p><i class="fas fa-fan"></i>Loại phòng: </p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Chung chủ: </p>
						<p><i class="fas fa-vector-square"></i> Diện tích: </p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Phòng tắm: </p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Bếp ăn: </p>
						<p><i class="fas fa-fan"></i> Điều hòa: </p>
						<p><i class="fas fa-fan"></i> Nóng lạnh: </p>
						<p><i class="fa fa-check"></i> Ban công: </p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Giá điện</p>  {/* Giá dân| kinh doanh*/}
						<p><i class="fa fa-check" aria-hidden="true"></i> Giá nước</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Tiện ích khác</p>
					</div>
                    <div id="iframe_gg_map">
					    <iframe title="GG map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.8815860567393!2d105.79283100050066!3d21.00709029876346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc8534aa827%3A0xf081f17479465d22!2zU2nDqnUgVGjhu4sgQmlnIEMgVGjEg25nIExvbmc!5e1!3m2!1svi!2s!4v1602694432676!5m2!1svi!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" id="frame_gg_map"></iframe>
                    </div>
                </div>
			</div>

			<div class="col-sm-12 col-md-4">
				<CardUser />
				<div class="contact">
					<i class="fa fa-phone" aria-hidden="true"></i>{data.phone}
				</div>
				<div class="contact">
					<i class="fa fa-facebook"></i> Nhắn tin
				</div>
				<Padding />
				<Comment />
			</div>
		</div>
	</div>
    )
}
export default DetailPost


const fakeNews = {
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
    "discription": "Mieu ta ......",
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