import React from 'react'
import Footer from '../component/Footer'
import ListPost from "../component/ListPost"
import Menu from '../component/Menu'
import Padding from "../component/padding"
import Slider from '../component/SlideSlick'
import ListPostSlick from '../component/SlickPost'
import CardPostHorizontal from '../component/CardPostHorizontal'

const Home =() =>{
    return (
        <div>
            <Menu />
            <Padding />
            <Slider />
            <Padding />
            <div>
                <CardPostHorizontal />
            </div>
            <Padding />
            <ListPost />
            <Padding />
            <ListPostSlick />
            <Padding />
            <Footer />
        </div>
    )
}
export default Home;