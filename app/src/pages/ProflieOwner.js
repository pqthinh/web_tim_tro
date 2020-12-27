// code profile owner

import CardUser from "../component/CardUser"
import Footer from "../component/Footer"
import Menu from "../component/Menu"
import { TabPostManager } from "../component/tab/PostOfOwner"
import { getUser } from "../Utils/Common"
import {useLocation , useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "../fetch/axios"
import NotFoundScreen from "./notfound"
import CardOwner from "../component/CardOwner"

const ProfileOwner = ({user})=>{
    let { id } = useParams() ;
    const [owner, setOwner] = useState(null)
    // const {owner}= useLocation()
    var user = user ? user : owner
    
    const currentUser = getUser()
    var role = !currentUser? null : currentUser.role
    console.log(id)
    // lay thong tin owner theo id
    useEffect(()=>{
        const getOwner = async (id)=>{
            const res = await axios.get(`/user/owner/get/${id}`)
            setOwner(res.data)
            console.log(res.data)
        }
        if(id) getOwner(id)
    }, [id])

    // get new
    return (
        <>
            <Menu/>
            {user?
            <><CardOwner owner={user}/>
            <TabPostManager id_owner={user.id_owner} role={role} />
            </>:<><NotFoundScreen /></>}
            
            <Footer/>
        </>
    )
}
export default ProfileOwner