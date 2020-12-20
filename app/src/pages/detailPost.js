
import CardUser from '../component/CardUser'
import Padding from '../component/padding'
import Comment from  '../component/Comment'
import './detailPost.css'
import SlideSlick from '../component/SlideSlick'

const DetailPost = () =>{
    return (
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<h3 style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Phòng xxy</h3>
				{/* ImageSliderBootstrap truyen vao tham so la images : mang chua link anh */}
				{/* <ImageSliderBoostrap />  */}
				{/* <SliderImg /> */}
				<SlideSlick />
				<div class="content">
					<div class="row">
						<div class="col-9">
							<h3>Tiêu đề 1</h3>
							Giá:<span class="gia">1,6 triệu/tháng</span>
						</div>
						<div class="col-3">
							<div class="follow">
								Lưu tin <i class="fa fa-heart-o" aria-hidden="true"></i>
							</div>
						</div>						
					</div>
					<span class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>số 222,Trần Duy Hưng,Hà Nội</span>
					<div class="detail">
						<h4>Chi tiết về phòng</h4>
						<p><i class="fa fa-check" aria-hidden="true"></i> Nội dung 1</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Nội dung 2</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Nội dung 3</p>
						<p><i class="fa fa-check" aria-hidden="true"></i> Nội dung 4</p>
					</div>
                    <div id="iframe_gg_map">
					    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.8815860567393!2d105.79283100050066!3d21.00709029876346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc8534aa827%3A0xf081f17479465d22!2zU2nDqnUgVGjhu4sgQmlnIEMgVGjEg25nIExvbmc!5e1!3m2!1svi!2s!4v1602694432676!5m2!1svi!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" id="frame_gg_map"></iframe>
                    </div>
                </div>
			</div>

			<div class="col-sm-12 col-md-4">
				<CardUser />
				<div class="contact">
					<i class="fa fa-phone" aria-hidden="true"></i>0982222222 
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