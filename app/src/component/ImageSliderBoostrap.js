

const fake = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
]
const ImageSliderBoostrap = ({images})=>{
    const listImg = images || fake
    // console.log(listImg)
    return (
        <>
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={listImg[0]} class="img-thumbnail" alt="anh1" width="1100" height="500" />   
                </div>
                {
                    listImg.map( (x, i)=> (
                        <div class="carousel-item" key={i}>
                            <img src={x} class="img-thumbnail" alt="anh1" width="1100" height="500" />   
                        </div>
                    ))
                }
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        </>
    )
}

export default ImageSliderBoostrap