import { useHistory, useLocation } from 'react-router-dom'
import './CardUser.css'
import FormRepassword from './FormRepassword'
import { ModalCustom } from './ModalCustom'
import { getUser } from '../Utils/Common'
// chac chan da co user ? guest chuwa xet :)

// khi nguoi vao xem trang owner 
const CardOwner = ({owner}) =>{
	let history = useHistory()
	const {state} = useLocation()
	const viewOwner = state
	// console.log(user,viewOwner , owner)
	const currentUser = owner || viewOwner
    const user = getUser()
	const redirectToProfileOwner = (data) =>{
		history.push({
			pathname: `/profile/owner/${data.id}`,
			state: data
		})
	}
    return (
        <>
		{/* Chuyến hướng toi trang ca nhan cua owner */}
            <div id="home" class="tab-pane in active">
					<div style={{display: 'flex',justifyContent: 'center'}}>
						<div class="justify-content-center align-self-center">
                            <img src={currentUser.avatar} alt="Avatar" class="avatar-card-user img-fluid"/> 
							
							<div style={{marginTop: 10}}>
								{
									currentUser.email === user.email ? 
									<ModalCustom 
										title="Cập nhật mật khẩu"
										button = {<span className="btn btn-success"><span class="text-button-modal" >Đổi mật khẩu</span> <i class="fas fa-tools"></i> </span>}
										body = {<FormRepassword email={currentUser.email}/>}
										id="modal_re_pasword"
									/> :
									null
								}
								
								
							</div>
						</div>

						<div style={{margin: 20}}>
                            <div className="mt-3"></div>
							<h4 class="cardOwner-name-user">
                                <i class="fas fa-user-tie"></i>
								
								{/* kiem tra neu la owner thi chuyen trang */}
								<span class="content" onClick={()=> redirectToProfileOwner(currentUser)}>Name: {currentUser.name}</span>
							</h4>

							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-value">
                                        <i class="fas fa-envelope"></i>
										<span className="content">{currentUser.email}</span>
									</div>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-value">
                                        <i class="fas fa-home"></i>
                                        <span className="content">{currentUser.place}</span>
									</div>
								</div>
							</div>

							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-name">
									<i class="fas fa-phone-square"></i>
                                        <span  className="content"> {currentUser.phone}</span>
									</div>
								</div>
							</div>
							{/* api lấy tin đăng của 1 người */}
							{currentUser.role=== "owner" ?
							<>
							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-name">
										<i class="far fa-newspaper"></i>
                                        <span  className="content"> 20 Tin đăng</span>
									</div>
								</div>
							</div>
							
							<div className="Star-of-user">
								<span>Đánh giá: 5 <i class="fas fa-star" style={{color: "yellow"}}></i></span>
							</div> </>
							: null}
						</div>
					</div>
                    
                </div>
                <div className="mt-3"></div>
        </>
    )
}
export default CardOwner