import { useState } from "react"
import ListPost from "../ListPost"
import ListPostHorizontal from "../ListPostHorizontal"

export const TabMemberSaveNews = () =>{
    const [typeShow, setTypeShow] = useState(1)
    return (
        <>
            <div className="container">
                <div onClick={()=> setTypeShow(!typeShow)} style={{float: "right"}}>
                    {typeShow?
                    <span><i class="fas fa-th-large"></i></span>:
                    <span><i class="fas fa-th-list"></i></span>}
                </div>

                <div>
                    {typeShow?
                    <ListPost header={"Tin bạn đã lưu"} />:
                    <ListPostHorizontal header={"Tin bạn đã lưu"} />
                    }
                </div>
            </div>
        </>
    )
}