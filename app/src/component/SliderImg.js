import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg'
];
const properties = {
    duration: 2000,
    transitionDuration: 1000
}

const SliderImg = ({images , styles}) => {
    console.log(images)
    const listimage = images || fadeImages
    return (
        <div className="wrap">
        <Fade {...properties}>
            {listimage.map(img => (
                <div className="each-slide">
                    <div className="image-container">
                        <img src={img} alt={img} style={styles}/>
                    </div>
                </div>
            ))}
            
        </Fade>
        </div>
    )
}
export default SliderImg