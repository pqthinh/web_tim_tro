import CommentForm from "./CommentForm"
import CommentList from './CommentList'
import './Comment.css'

const Comment = () => {
    return (
        <>
            <CommentForm/>
            <div className="mt-3" ></div>
            <CommentList />
        </>
    )
}

export default Comment