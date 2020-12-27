import React from 'react'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import Padding from '../component/padding'
import { PostForm } from '../component/post/PostForm'
import SliderImg from '../component/SliderImg'
import { getUser } from '../Utils/Common'
// import SlideSlick from '../component/SlideSlick'

const PostNews = () =>{
    const user = getUser()
    console.log(user)
    return(
        <>
        <Menu />
        <SliderImg />
        <Padding/>
        <PostForm id_owner={user.id_owner}/>
        <Footer />
        </>
    )
}
export default PostNews