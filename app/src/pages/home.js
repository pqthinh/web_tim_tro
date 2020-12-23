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
import SearchAdvance from '../component/form/searchAdvance'

const Home =() =>{
    return (
        <div>
            <Menu />
            <SearchAdvance />
            <Padding />
            <TabPostManager />
            <div className="container">
                <CardUser /> 
            </div>
            <Padding />
            <TabMemberSaveNews />
            <PostForm />
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