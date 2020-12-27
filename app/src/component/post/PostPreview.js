import '../../pages/detailPost.css'
import SlideSlick from '../SlideSlick'

const PreView = ({news}) =>{

    const data = news
    var img = Object.values(data.file)
	console.log(img)
    return (
		<>
	<div class="container">
        <h3 className="title-of-details-post" style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Phòng {data.postID}</h3>
        <SlideSlick images={img}/>
        <div className="mt-3"></div>
        <div class="content">
            <div class="row">
                <div class="col-9 title-of-details-post">
                    <h3>{data.title}</h3>
                    Giá:<span class="gia price-news">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}  /tháng</span>
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
                <p><i class="fas fa-vector-square"></i> Diện tích: {" " +data.area}</p>
                <p><i class="fa fa-check" aria-hidden="true"></i> Phòng tắm: {data.bathroom? " Vệ sinh riêng / khép kín ": " Vệ sinh chung "}</p>
                <p><i class="fa fa-check" aria-hidden="true"></i> Bếp ăn: {data.kitchen? " Khu bếp riêng " : " Không cho phép nấu ăn" }</p>
                <p><i class="fas fa-fan"></i> Điều hòa: {data.airConditioner? " Có" :  " Không" }</p>
                <p><i class="fas fa-fan"></i> Nóng lạnh: {data.nonglanh? " Có" :  " Không" }</p>
                <p><i class="fa fa-check"></i> Ban công: {data.balcony? " Có" :  " Không" }</p>
                <p><i class="fa fa-check" aria-hidden="true"></i> Giá điện {!data.typeCostElectric? " Giá dân" :  data.electricity }</p>  {/* Giá dân| kinh doanh*/}
                <p><i class="fa fa-check" aria-hidden="true"></i> Giá nước: {!data.typeCostElectric? " Giá dân" :  data.water }</p>
                <p><i class="fa fa-check" aria-hidden="true"></i> Tiện ích khác:
                    <pre>{data.other}</pre>
                </p>
            </div>
		</div>
	</div>
	</>
    )
}
export default PreView
