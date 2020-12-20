import './CardUser.css'

const CardUser = () =>{
    return (
        <>
            <div id="home" class="tab-pane in active">
					<div class="row">
						<div class="col-xs-12 col-sm-4 center">
                            <div className="mt-3"></div>
                            <img src="images/img1.jpg" alt="Avatar" class="avatar img-fluid"/> 
						</div>

						<div class="col-xs-12 col-sm-8">
                            <div className="mt-3"></div>
							<h4 class="carduser-name-user">
                                <i class="fas fa-user-tie"></i>
								<a href="!#"><span class="content">Name: Thinh</span></a>
							</h4>

							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-value">
                                        <i class="fas fa-envelope"></i>
										<span className="content">email@email.email</span>
									</div>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-value">
                                        <i class="fas fa-home"></i>
                                        <span className="content">Hà Nội</span>
									</div>
								</div>
							</div>

							<div class="profile-user-info">

								<div class="profile-info-row">
									<div class="profile-info-name">
                                        <i class="fab fa-facebook"></i>
                                        <span  className="content"> Facebook</span>
									</div>
								</div>
							</div>
						</div>
					</div>
                    <div className="Star-of-user">
                        <span>Đánh giá: 5 <i class="fas fa-star"></i></span>
                    </div>
                </div>
                <div className="mt-3"></div>
        </>
    )
}
export default CardUser