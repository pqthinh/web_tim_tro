import './Footer.css'

const Footer = ()=> {
    return (
        <>
            <footer>
                <div class="row">
                    <div></div>
                    <div class="col-6 col-md-3 col">
                        <h5>Tải ứng dụng</h5>
                        <div class="_link">
                            <a href="#"><img src="images/android.svg" alt="android" /></a>
                            <a href="#"><img src="images/ios.svg" alt="ios" /></a>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col">
                        <h5>Về chúng tôi</h5>
                        <div class="_link">
                            <a href="#">Giới thiệu</a><br/>
                            <a href="#">Blog</a><br/>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col">
                        <h5>Hỗ trợ khách hàng</h5>
                        <div class="_link">
                            <a href="#">Trung tâm trợ giúp</a><br/>
                            <a href="#">Quyền riêng tư</a><br/>
                            <a href="#">Liên hệ</a>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col">
                        <h5>Liên kết</h5>
                        <div class="socialNet">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div class="bot"><h4>Design by Team_pqthinh</h4></div>
            </footer>
        </>
    )
}
export default Footer