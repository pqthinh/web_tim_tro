import React from "react";
import CardPostHorizontal from "./CardPostHorizontal";

const ListPostHorizontal = ({header, news})=>{
    const title = header || "Tin đăng gần đây"
    // news là mảng chứa tất cả đối tượng tin đăng
    return(
        <>
            <div class="container" style={{float: "left"}}>
                <h2>{title}</h2>
                <div className="mt-3"></div>
                <div class="items">
                    <div class="row">
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                        <CardPostHorizontal />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListPostHorizontal