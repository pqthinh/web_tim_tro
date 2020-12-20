
import './detailPost.css'

const DetailPost = () =>{
    return (
        <div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-9">
				<h3>Phòng xxy</h3>

				<div id="demo" class="carousel slide" data-ride="carousel">
					<ul class="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" class="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					</ul>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="images/img1.jpg" class="img-thumbnail" alt="anh1" width="1100" height="500" />   
						</div>
						<div class="carousel-item">
							<img src="images/img2.jpg" class="img-thumbnail" alt="anh1" width="1100" height="500" />  
						</div>
						<div class="carousel-item">
							<img src="images/img3.jpg" class="img-thumbnail" alt="anh1" width="1100" height="500"/>  
						</div>
					</div>
					<a class="carousel-control-prev" href="#demo" data-slide="prev">
						<span class="carousel-control-prev-icon"></span>
					</a>
					<a class="carousel-control-next" href="#demo" data-slide="next">
						<span class="carousel-control-next-icon"></span>
					</a>
				</div>
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

			<div class="col-sm-12 col-md-3">
				<div class="contact">
					<i class="fa fa-phone" aria-hidden="true"></i>0982222222 
				</div>
				<div class="contact">
					<i class="fa fa-facebook"></i> Nhắn tin
				</div>
			</div>
		</div>
	</div>
    )
}
export default DetailPost