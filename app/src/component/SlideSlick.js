import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uriClient from '../fetch/uriClient'

const image = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
]
export default function SlideSlick({images, styles}) {
    const listImg = images || image
    var styleSlide =  styles || {width: '100%', height: 'auto'}
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
                        <img src={uriClient+'/'+img} alt={img} style={styleSlide}/>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    )
}