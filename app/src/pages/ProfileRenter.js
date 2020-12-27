// Chinh sua thong tin doi voi renter
// Mat khau

import CardUser from "../component/CardUser"
import Footer from "../component/Footer"
import Menu from "../component/Menu"
// import ListPost from '../component/ListPost'
import ListPostHorizontal from '../component/ListPostHorizontal'

const ProfileRenter = ()=>{

    return (
        <>
            <Menu/>
            <CardUser/>
            <ListPostHorizontal/>
            <div style={{clear: 'both'}}></div>
            <Footer />
        </>
    )
}
export default ProfileRenter