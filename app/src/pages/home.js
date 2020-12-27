import React, { useEffect, useState } from 'react'
import Footer from '../component/Footer'
import ListPost from "../component/ListPost"
import Menu from '../component/Menu'
import Padding from "../component/padding"
import ListPostSlick from '../component/SlickPost'
import Search from '../component/SearchForm'
import SliderImg from '../component/SliderImg'
import post from '../api/post'

const Home =() =>{

    const [quantam, setQuantam] = useState([])
    const [view, setView] = useState([])
    const [all, setAll] = useState([])

    useEffect(()=>{
        const getall = async() =>{
            let res = await post.getAll()
            console.log(res.data)
            setAll(res.data)
        }
        const getFav = async() =>{
            let res = await post.getPostFav()
            console.log(res.data)
            setQuantam(res.data)
        }
        const getView = async() =>{
            let res = await post.getPostView()
            setView(res.data)
        }
        getall()
        getFav()
        getView()
    },[])

    return (
        <div>
            <Menu />
            <Search />
            <SliderImg />
            <Padding />
            {/* Lấy 8 tin cho slick */}
            <ListPostSlick news={quantam} header ="Tin đang được quan tâm"/>
            <Padding />
            <ListPostSlick news={view} header ="Tin đang được xem nhiều nhất"/>
            <Padding />
            <ListPost news={all} header ="Tin đăng gần đây"/>
            <Padding />
            <Footer />
        </div>
    )
}
export default Home;

