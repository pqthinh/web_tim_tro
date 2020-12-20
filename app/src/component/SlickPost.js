import React from "react";
import Slider from "react-slick";
// import CardPost from "./CardPost";
import CardPostOfSlick from "./CardPostOfSlick";
import Padding from "./padding";

export default function ListPostSlick({props}) {
    const header = props?.header || "Tin đang được quan tâm"
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };
    return (
    <div className="container">
        <h2> {header} </h2>
        <Padding />
        <Slider {...settings}>
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
            <CardPostOfSlick />
        </Slider>
    </div>
    );

}
