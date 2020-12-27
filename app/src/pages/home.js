import React from 'react'
import Footer from '../component/Footer'
import ListPost from "../component/ListPost"
import Menu from '../component/Menu'
import Padding from "../component/padding"
import Slider from '../component/SlideSlick'
import ListPostSlick from '../component/SlickPost'
import CardPostHorizontal from '../component/CardPostHorizontal'
import { PostForm } from '../component/post/PostForm'
import { TabPostManager } from '../component/tab/PostOfOwner'
import { TabMemberSaveNews } from '../component/tab/TabMemberSaveNews'
import CardUser from '../component/CardUser'
import Search from '../component/SearchForm'
import SliderImg from '../component/SliderImg'

const Home =() =>{
    return (
        <div>
            <Menu />
            <Search />
            <SliderImg />
            <Padding />
            <ListPostSlick news={null} header ="Tin đang được quan tâm"/>
            <Padding />
            <ListPostSlick news={null} header ="Tin đang được xem nhiều nhất"/>
            <Padding />
            <ListPost />
            <Padding />
            <Footer />
        </div>
    )
}
export default Home;

