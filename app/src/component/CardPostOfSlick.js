import React from 'react'

const CardPostOfSlick = ({props}) =>{
    return (
        <>
            <a href="chitiet.html" >
                <div class="room detail_room_card_post">
                    <div class="image-room">
                        <div class="image"><img src="images/img1.jpg" alt="can-ho" /></div>
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
        </>
    )
}

export default CardPostOfSlick