import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const image = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
]
export default function SimpleSlider({images, styles}) {
    const listImg = images || image
    const styleSlide =  styles || {width: '100%', height: 'auto'}
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
    <div className="container">
        <Slider {...settings}>
            {listImg.map(img => (
                <div className="each-slide">
                    <div className="image-container">
                        <img src={img} alt={img} style={styleSlide}/>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    )
}