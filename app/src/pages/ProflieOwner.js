// code profile owner

import CardUser from "../component/CardUser"
import Footer from "../component/Footer"
import Menu from "../component/Menu"
import { TabPostManager } from "../component/tab/PostOfOwner"

const ProfileOwner = ()=>{
    return (
        <>
            <Menu/>
            <CardUser />
            <TabPostManager />
            <Footer/>
        </>
    )
}
export default ProfileOwner