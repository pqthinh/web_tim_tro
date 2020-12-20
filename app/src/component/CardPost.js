import React from 'react'
import './CardPost.css'

const CardPost = ({props}) =>{
    
    return (
        <>
            <div class="col-6 col-sm-4 col-md-3 cardpost">
                <a href="chitiet.html" class="detail-room">
                    <div class="room">
                        <div class="image-room">
                            <div class="image"><img src="images/img1.jpg" alt="can-ho" id="cardPost-img"/></div>
                            <div class="follow"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        </div>
                        <div class="cap">
                            <div class="title-1">
                                Phòng trọ giá rẻ Mễ Trì
                            </div>
                            <div class="title-3">
                                <i class="fas fa-coins"></i>
                                <span className="content">1,6 triệu/tháng</span>
                            </div>
                            <div class="title-2">
                                <i class="fas fa-house-user"></i>
                                <span className="content">Pham Quang Thinh</span>
                            </div>
                        </div>
                        <div class="cap-foot">
                            <i class="fas fa-home"></i>
                            <span className="content">Hà Nội</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default CardPost