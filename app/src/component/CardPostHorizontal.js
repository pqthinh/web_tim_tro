
import './CardPostHorizontal.css'

const fake = {
    name : "",
    price : 2000000,
    place : "Ha Noi",
    owner : "Pham Quang Thinh",
    area : "30 m2",
    number : 4,
    mieuta: "Miêu tả : Diện tích 26 m2 , khép kín",
    img : "https://cdn.chotot.com/iq4HfNNXU8q4qrOBGmYpmJiRtFHs0M9OdTzGWJzm91c/preset:listing/plain/0ecaccae289ece8e2d8e5c332455cade-2697927666900937440.jpg",
}

const CardPostHorizontal = ({props, post})=>{
    const data =  post || fake
    return (
        <>
            <div className="container-card">
                <div className="card-horizontal">
                    <div className="Card-H-img">
                        <img src={data.img} alt="" class="img-thumbnail rounded" height='60px'/>
                        
                        <div className="Card-img-number">
                            <span className="number">{data.number}</span>
                        </div>
                    </div>
                    <div className="Card-H-content">
                        <div class="cap">
                            <div class="title-1">
                                Phòng trọ giá rẻ Mễ Trì
                            </div>
                            <div class="title-3">
                                <i class="fas fa-coins"></i>
                                <span className="content">1,6 triệu/tháng</span>
                            </div>
                            <div class="title-2">
                                <i class="fas fa-prescription-bottle"></i>
                                <span className="content">Miêu tả : Diện tích 26 m2 , khép kín</span>
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
                    <div className="extends">
                        <span className="chinhsuatin"><i class="fas fa-cog"></i></span>
                        <span className="themvaodanhmucyeuthich"><i class="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPostHorizontal