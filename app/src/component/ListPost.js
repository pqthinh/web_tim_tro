import React from "react";
import CardPost from "./CardPost";

const ListPost = ({header})=>{
    const title = header || "Tin đăng gần đây"
    return(
        <>
            
            <div class="container">
            <h2>{title}</h2>
                <div class="items">
                    <div class="row">
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                        <CardPost />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListPost