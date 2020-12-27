import React from "react";
import Slider from "react-slick";
// import CardPost from "./CardPost";
import CardPostOfSlick from "./CardPostOfSlick";
import NoResult from "./noresult";
import Padding from "./padding";
import post from '../api/post'

export default function ListPostSlick({header, news}) {
    // tinh view
    const increView = async(id) =>{
        await post.countview(id)
    }
    var title = header || "Tin đang được quan tâm"
    const data = news
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
        <h2> {title} </h2>
        <Padding />
        <Slider {...settings}>
            {!data? <NoResult />: data.map(
                (x, index) =>
                <CardPostOfSlick key={index} news={x} onClick={()=> increView(x.postID)}/>
            )}
        </Slider>
    </div>
    );

}
