import './viewPost.css'

const ViewPost = ({post}) =>{
	const imgs = JSON.parse(post.images)
    return(
        <>
        <div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-12">
				<h3>{post.title}</h3>

				<div id="demo" class="carousel slide" data-ride="carousel">
					<ul class="carousel-indicators">
                        {
                            imgs && imgs.map((img, index)=> 
                                index===0 ? <li data-target="#demo" data-slide-to="0" class="active"></li>
                                : <li data-target="#demo" data-slide-to={index}></li>
                            )
                        }
					</ul>
					<div class="carousel-inner">
                        {
                            imgs && imgs.map((img, index)=> 
                                index===0 ?
                                <div class="carousel-item active">
                                    <img src={img} class="img-thumbnail" alt="anh1" width="1100" height="500"/>   
                                </div>
                                :
                                <div class="carousel-item">
                                    <img src={img} class="img-thumbnail" alt="anh1" width="1100" height="500"/>   
                                </div>
                        	)
                        }
						
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
							<h3>{post.title}</h3>
							<p>Giá:<span class="gia"> {post.price} đ/tháng</span></p>
							<p>{`View : ${post.views} . Like: ${post.like}`}</p>
							<p><i class="fa fa-map-marker" aria-hidden="true"></i>Địa chỉ: {post.address}</p>
							<p>Hạn tin đăng: {post.duration}</p>
							<p>Từ ngày: {post.updateAt}</p>
						</div>			
					</div>
					<div>
						<div>
							<p>Chủ nhà: {post.name}</p>
							<p>Đại chỉ email: {post.email}</p>
							<p>Sđt: {post.phone} </p>
						</div>
					</div>
					<div class="detail">
						<h4>Chi tiết về phòng</h4>
						<pre><i class="fa fa-check" aria-hidden="true"></i> 
							{`${post.discription}`}
							<p>Gần: {post.near_place}</p>
							<p>Tiền cọc: {post.tiencoc}</p>
						</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}
export default ViewPost