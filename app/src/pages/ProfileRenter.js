// Chinh sua thong tin doi voi renter
// Mat khau

import CardUser from "../component/CardUser"
import Footer from "../component/Footer"
import Menu from "../component/Menu"
import { TabPostManager } from "../component/tab/PostOfOwner"
// import ListPost from '../component/ListPost'
// import ListPostHorizontal from '../component/ListPostHorizontal'
import { TabMemberSaveNews } from "../component/tab/TabMemberSaveNews"
import { getUser } from "../Utils/Common"

const ProfileRenter = ()=>{
    const currentUser = getUser()
    return (
        <>
            <Menu/>
            <CardUser owner={currentUser}/>
            {
                currentUser.role === "owner" ? <TabPostManager id_owner={currentUser.id} role="owner"/> : <TabMemberSaveNews />
            }
            
            <div style={{clear: 'both'}}></div>
            <Footer />
        </>
    )
}
export default ProfileRenter