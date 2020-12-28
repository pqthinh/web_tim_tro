import { useParams , useLocation} from 'react-router-dom'

import CardUser from '../component/CardUser'
import Padding from '../component/padding'
import Comment from  '../component/Comment'
import './detailPost.css'
import SlideSlick from '../component/SlideSlick'
import { ModalCustom } from '../component/ModalCustom'
import FormReport from '../component/FormReport'
import AddTimeNews from '../component/form/addTimePost'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import post from '../api/post'
import { useEffect, useState } from 'react'
import { getUser } from '../Utils/Common'
import axios from '../fetch/axios'
import ModalEditPost from '../component/post/editpost'

const DetailPost = () =>{
	const { id } = useParams()
	const { state } = useLocation()
	const [news, setNews] = useState({})
	// console.log(id,  state)

	const img = JSON.parse(state.images)
	// console.log(img)
	
	let data = news || state

	// lay comment
	const [comment, setComment] = useState([])
	useEffect(()=>{
		const getDetail = async (id)=>{
			let res = await post.getDetail(id)
			console.log(res.data)
			setNews(res.data)
		}
		const getcomment= async (id) =>{
			let res = await post.getcomment(id)
			console.log(res.data)
			setComment(res.data.review)
		}
		getDetail(id)
		getcomment(id)
	},[id])

	// lay nguoi dung hien tai
	const currentUser = getUser()

	const AddToFav = async(id) =>{
		let res = await axios.post("/save/post", {id_post: id, id_member: currentUser.id})
		alert(res.data.msg)
		await Like(id)
	}

	const Like = async (id)=>{
		let temp = await axios.post(`/post/countlike/${id}`)
		console.log(temp.data)
	}

	const DaChoThue = async (id)=>{
		let temp = await axios.post(`/post/owner/state/${id}`)
		alert(temp.data.msg)
	}

    return (
		<>
		<Menu />
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<h3 className="title-of-details-post" style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Phòng {data.postID}</h3>
			
				<SlideSlick images={img}/>
				<div class="content">
					<div class="row">
						<div class="col-9 title-of-details-post">
							<h3>{data.title}</h3>
							Giá:<span class="gia price-news">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}  /tháng</span>
						</div>
						<div style={{color: "#2ECC71"}}>
							<span onClick={()=>Like(id)}>{data.like + " "}<i class="far fa-thumbs-up"></i></span>
							<span>{'  '}</span>
							<span>{data.views + " "}<i class="far fa-eye"></i></span>
						</div>
						<div class="col-3">
							{/* Button handle event save news to list fav of member */}
							{!currentUser || currentUser.role ==="owner" ? null :
							<div class="follow" onClick={()=> AddToFav(id)}>
								<span class="text-button-modal" >Lưu tin</span> <i class="fa fa-heart-o" aria-hidden="true"></i>
							</div>}

							{/* Button report tin dang */}
							{!currentUser || currentUser.role ==="owner" ? null :
							<div  class="follow">
								<ModalCustom 
									title="Báo cáo tin đăng"
									button = {<span><span class="text-button-modal" >Báo cáo</span> <i class="far fa-flag"></i> </span>}
									body = {<FormReport id_post={id} id_member={currentUser.id}/>}
									id="modal_report_news"
								/>
							</div>}
							{/* Danh cho owner de gia han tin */}
							{!currentUser || currentUser.role ==="member" || currentUser.id !== data.id_owner? null :
							<><div class="follow">
								<ModalCustom 
									title="Gia hạn cho tin đăng"
									button = {<span><span class="text-button-modal" >Gia hạn</span> <i class="far fa-calendar-plus"></i> </span>}
									body = {<AddTimeNews  id_post={id} id_owner={currentUser.id}/>}
									id="modal_giahan_news"
								/>
							</div>
							{currentUser.id === data.id_owner?
							<><div class="follow">
								<span><span class="text-button-modal" onClick={()=> DaChoThue(id)}>Tin đã cho thuê</span> <i class="far fa-calendar-plus"></i> </span>
							</div>
							{data.status === "pending"?
							<div class="follow">
								<ModalCustom 
									title="Chỉnh sửa tin"
									button = {<span><span class="text-button-modal" >Chỉnh sửa</span> <i class="far fa-calendar-plus"></i> </span>}
									body = {<ModalEditPost  post={data}/>}
									id="modal_chinhsua_news"
								/>
							</div>: null}
							</>: null}
							</>}
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
						<p><i class="fas fa-fan"></i>Loại phòng: {data.typeRoom === 0 ? " Phòng trọ" : data.typeRoom === 1? " Chung cư mini" : data.typeRoom === 2 ? " Nhà nguyên căn" : " Chung cư" }</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Chung chủ: {data.shared? " Có ": " Không "}</p>
						<p><i class="fas fa-vector-square"></i> Diện tích: {" " +data.area} m2</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Phòng tắm: {data.bathroom? " Vệ sinh riêng / khép kín ": " Vệ sinh chung "}</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Bếp ăn: {data.kitchen? " Khu bếp riêng " : " Không cho phép nấu ăn" }</p>
						<p><i class="fas fa-fan"></i> Điều hòa: {data.airConditioner? " Có" :  " Không" }</p>
						<p><i class="fas fa-fan"></i> Nóng lạnh: {data.nonglanh? " Có" :  " Không" }</p>
						<p><i class="fa fa-check"></i> Ban công: {data.balcony? " Có" :  " Không" }</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Giá điện {!data.typeCostElectric? " Giá dân" :  data.electricity+ "đ"  }</p>  {/* Giá dân| kinh doanh*/}
						<p><i class="fa fa-check" aria-hidden="true"></i> Giá nước: {!data.typeCostElectric? " Giá dân" :  data.water+ "đ" } </p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Tiện ích khác:
							<pre>{data.other}</pre>
						</p>
					</div>
                    <div id="iframe_gg_map">
					    <iframe title="GG map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.8815860567393!2d105.79283100050066!3d21.00709029876346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc8534aa827%3A0xf081f17479465d22!2zU2nDqnUgVGjhu4sgQmlnIEMgVGjEg25nIExvbmc!5e1!3m2!1svi!2s!4v1602694432676!5m2!1svi!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" id="frame_gg_map"></iframe>
                    </div>
                </div>
			</div>

			<div class="col-sm-12 col-md-4">
				<CardUser owner={{name: data.name, role: 'owner', id: data.id_owner, email: data.email, phone: data.phone, avatar: data.avatar, place: data.place}}/>
				<div class="contact">
					<i class="fa fa-phone" aria-hidden="true"></i>{data.phone|| "09999999999"}
				</div>
				<div class="contact">
					<i class="fa fa-facebook"></i> Nhắn tin
				</div>
				<Padding />
				<Comment comment={comment}/>
			</div>
		</div>
	</div>
	<Padding />
	<Footer />
	</>
    )
}
export default DetailPost
