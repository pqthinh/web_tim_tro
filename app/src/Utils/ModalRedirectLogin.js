import { useHistory } from 'react-router-dom'
import { removeUserSession } from './Common'

const ModalRedirectLogin = () =>{
    let history = useHistory()
    const Chuyentaikhoan = () =>{
        removeUserSession()
        history.push('./login')
    }
    return (
        <div>
            <p>Bạn không đủ quyền vào trang này</p>
            <p>Đăng nhập để tiếp tục</p>
            <button onClick={()=> Chuyentaikhoan()} >
                Chuyển tài khoản khác
            </button>
        </div>
    )
}
export default ModalRedirectLogin