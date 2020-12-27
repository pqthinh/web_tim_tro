import CommentForm from "./CommentForm"
import CommentList from './CommentList'
import './Comment.css'

const Comment = ({comment}) => {
    return (
        <>
            <CommentForm/>
            <div className="mt-3" ></div>
            <CommentList comment={comment}/>
        </>
    )
}

export default Comment