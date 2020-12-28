import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import uriClient from '../fetch/uriClient'

const fadeImages = [
  `${uriClient}/images/image1.jpg`,
  `${uriClient}/images/image2.png`,
  `${uriClient}/images/image3.jpg`,
  `${uriClient}/images/image1.jpg`,
  `${uriClient}/images/image2.png`,
  `${uriClient}/images/image3.jpg`
];
const properties = {
    duration: 2000,
    transitionDuration: 1000
}

const SliderImg = ({images , styles}) => {
    // console.log(images)
    const listimage = images || fadeImages
    var styleSlide =  styles || {width: '100%', height: 300}
    return (
        <div className="container">
        <Fade {...properties}>
            {listimage.map(img => (
                <div className="each-slide">
                    <div className="image-container">
                        <img src={img} alt={img} style={styleSlide} />
                    </div>
                </div>
            ))}
            
        </Fade>
        </div>
    )
}
export default SliderImg