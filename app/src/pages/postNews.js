import React from 'react'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import Padding from '../component/padding'
import { PostForm } from '../component/post/PostForm'
import SliderImg from '../component/SliderImg'
import SlideSlick from '../component/SlideSlick'

const PostNews = () =>{
    return(
        <>
        <Menu />
        <SlideSlick />
        <Padding/>
        <PostForm />
        <Footer />
        </>
    )
}
export default PostNews