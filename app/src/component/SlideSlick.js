import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uriClient from '../fetch/uriClient'

const image = [
    `${uriClient}/images/img1.jpg`,
    `${uriClient}/images/img2.jpg`,
    `${uriClient}/images/img3.jpg`,
    `${uriClient}/images/img1.jpg`,
    `${uriClient}/images/img2.jpg`,
    `${uriClient}/images/img3.jpg`
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
            {listImg.map((img, index) => (
                <div key={index} className="each-slide">
                    <div className="image-container">
                        <img src={img} alt={img} style={styleSlide}/>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    )
}