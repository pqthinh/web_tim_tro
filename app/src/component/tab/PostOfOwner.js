import axios from "axios"
import { useEffect, useState } from "react"
import ListPost from "../ListPost"
import ListPostHorizontal from "../ListPostHorizontal"
// import { useHistory } from "react-router-dom"

const allpri = ["admin" , "owner"]
var notpri = "renter"
export const TabPostManager = ({id_owner, role})=>{
    
    const currentUserRole = role || notpri
    // console.log(currentUserRole , id_owner)
    const [typeShow, setTypeShow] = useState(1)

    const [all, setAll] = useState([])
    const [selling, setSelling] = useState([])
    const [selled, setSelled] = useState([])
    const [pending, setPending] = useState([])
    const [block, setBlock] = useState([])
    const [expire, setExpire] = useState([])

    // check role de fetch api
    useEffect(() => {
        const forMem = async () =>{
            const resSelling  = await  axios.get(`/post/owner/type?status=active&id_owner=${id_owner}`)
            console.log(resSelling.data)
            setSelling(resSelling.data)

            // let data1 ={available: "rented", id_owner: id_owner, available: "rented"}
            const resSelled  = await  axios.get(`/post/owner/type?status=active&id_owner=${id_owner}&availabel=rented`)
            console.log(resSelled.data)
            setSelled(resSelled.data)

            // setAll([...all, selled, selling])
            // setAll([...selling,...selled])
        }
        const forOwner = async ()=>{
            await forMem()

            const resPending  = await  axios.get(`/post/owner/type?status=pending&id_owner=${id_owner}`)
            console.log(resPending.data)
            setPending(resPending.data)

            const resBlock  = await  axios.get(`/post/owner/type?status=deactive&id_owner=${id_owner}`)
            console.log(resBlock.data)
            setBlock(resBlock.data)

            const res = await axios.get(`/post/owner?id_owner=${id_owner}`)
            setExpire(res.data)

        }
        allpri.includes(currentUserRole) ?
            forOwner() : forMem()
        setAll([...selled,...selling,...pending,...block,...expire])
    },[id_owner])

    return (
        <div class="container">
            <div class="row">
                <div class="col-xs-12 ">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">Tấ cả các tin </a>
                            <a class="nav-item nav-link" id="nav-posting-tab" data-toggle="tab" href="#nav-posting" role="tab" aria-controls="nav-posting" aria-selected="false">Tin đang được đăng bán</a>
                            <a class="nav-item nav-link" id="nav-rented-tab" data-toggle="tab" href="#nav-rented" role="tab" aria-controls="nav-rented" aria-selected="false">Tin đã được thuê</a>

                            {/* phân quyền */}
                            
                            {allpri.includes(currentUserRole)? <>
                            <a class="nav-item nav-link" id="nav-pendding-tab" data-toggle="tab" href="#nav-pendding" role="tab" aria-controls="nav-pendding" aria-selected="false">Tin đợi duyệt</a>
                            <a class="nav-item nav-link" id="nav-expire-tab" data-toggle="tab" href="#nav-expire" role="tab" aria-controls="nav-expire" aria-selected="false">Tin đã bị hết hạn</a>
                            <a class="nav-item nav-link" id="nav-deactive-tab" data-toggle="tab" href="#nav-deactive" role="tab" aria-controls="nav-deactive" aria-selected="false">Tin đã bị hủy</a> </>
                            : null }
                        </div>
                    </nav>
                    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div onClick={()=> setTypeShow(!typeShow)} style={{float: "right"}}>
                            {typeShow?
                            <span><i class="fas fa-th-large"></i></span>:
                            <span><i class="fas fa-th-list"></i></span>}
                        </div>

                        <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                            {typeShow?
                            <ListPost header={"Tất cả tin của bạn"} news={all}/>:
                            <ListPostHorizontal header={"Tất cả tin của bạn"} news={all}/>
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-posting" role="tabpanel" aria-labelledby="nav-posting-tab">
                            {typeShow?
                            <ListPost header={"Tin đang bán"} news={selling}/>:
                            <ListPostHorizontal header={"Tin đang bán"} news={selling}/>
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-pendding" role="tabpanel" aria-labelledby="nav-pendding-tab">
                            {typeShow?
                            <ListPost header={"Tin đang chờ duyệt"} news={pending}/>:
                            <ListPostHorizontal header={"Tin đang chờ duyệt"}  news={pending}/>
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-rented" role="tabpanel" aria-labelledby="nav-rented-tab">
                            {typeShow?
                            <ListPost header={"Tin đã cho thuê"} news={selled}/>:
                            <ListPostHorizontal header={"Tin đã cho thuê"}  news={selled}/>
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-expire" role="tabpanel" aria-labelledby="nav-expire-tab">
                            {typeShow?
                            <ListPost header={"Tin đã hết hạn đăng"} news={expire}/>:
                            <ListPostHorizontal header={"Tin đã hết hạn đăng"}  news={expire}/>
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-deactive" role="tabpanel" aria-labelledby="nav-deactive-tab">
                            {typeShow?
                            <ListPost header={"Tin bị cấm đăng"} news={block}/>:
                            <ListPostHorizontal header={"Tin bị cấm đăng"}  news={block}/>
                            }
                        </div>
                    </div>
                
                </div>
            </div>
        </div>

    )
}