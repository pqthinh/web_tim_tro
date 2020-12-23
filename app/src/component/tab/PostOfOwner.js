import { useState } from "react"
import ListPost from "../ListPost"
import ListPostHorizontal from "../ListPostHorizontal"

const role = ["admin" , "owner"]
const currentUserRole = "renter"
export const TabPostManager =  ()=>{

    const [typeShow, setTypeShow] = useState(1)

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
                            
                            {role.includes(currentUserRole)? <>
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
                            <ListPost header={"Tất cả tin của bạn"} />:
                            <ListPostHorizontal header={"Tất cả tin của bạn"} />
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-posting" role="tabpanel" aria-labelledby="nav-posting-tab">
                            {typeShow?
                            <ListPost header={"Tin đang bán"} />:
                            <ListPostHorizontal header={"Tin đang bán"} />
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-pendding" role="tabpanel" aria-labelledby="nav-pendding-tab">
                            {typeShow?
                            <ListPost header={"Tin đang chờ duyệt"} />:
                            <ListPostHorizontal header={"Tin đang chờ duyệt"} />
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-rented" role="tabpanel" aria-labelledby="nav-rented-tab">
                            {typeShow?
                            <ListPost header={"Tin đã cho thuê"} />:
                            <ListPostHorizontal header={"Tin đã cho thuê"} />
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-expire" role="tabpanel" aria-labelledby="nav-expire-tab">
                            {typeShow?
                            <ListPost header={"Tin đã hết hạn đăng"} />:
                            <ListPostHorizontal header={"Tin đã hết hạn đăng"} />
                            }
                        </div>

                        <div class="tab-pane fade" id="nav-deactive" role="tabpanel" aria-labelledby="nav-deactive-tab">
                            {typeShow?
                            <ListPost header={"Tin bị cấm đăng"} />:
                            <ListPostHorizontal header={"Tin bị cấm đăng"} />
                            }
                        </div>
                    </div>
                
                </div>
            </div>
        </div>

    )
}