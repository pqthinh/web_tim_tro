// Commentr form gom post bình luận về phòng trọ và gửi số sao để đánh giá ( default = 5)

import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

export default function CommentForm ({props}) {
    const [comment, setComment] = useState('')
    const [star, setStar] = useState(5)

    const ratingChanged = (newRating) => {
        console.log(newRating);
        setStar(newRating)
    }
    const handleChange = (event)=>{    
        setComment(event.target.value);  
    }
    const handleSubmit = (event) => {
        alert('An essay was submitted: ' + comment + " star: "+ star);
        // upload to server
        // check quyen truoc : chi renter moi dc binh luan
        event.preventDefault();
    }
    return (
        <>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={20}
                isHalf={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <form onSubmit={handleSubmit}>
                <label>
                    Đánh giá về tin đăng
                    <textarea value={comment} onChange={handleChange} />        
                </label>
                <input type="submit" value="Submit" className="Post-comment btn btn-success"/>
            </form>
        </>
    )
} 