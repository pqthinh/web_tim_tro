import CommentItem from "./CommentItem"

const CommentList = () =>{

    return (
        <>
            <div>
                {
                    fakeComment.map(x=> (
                        <CommentItem comment={x}/>
                    ))
                }
            </div>
        </>
    )
}
export default CommentList

const fakeComment = [
    {
        user: "Pham quang thinh",
        avatar: "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng",
        content: "Phong tro rat dep",
        star: 4,
        time: new Date()
    },
    {
        user: "Pham quang thinh",
        avatar: "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng",
        content: "Phong tro rat dep",
        star: 4,
        time: new Date()
    },
    {
        user: "Pham quang thinh",
        avatar: "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng",
        content: "Phong tro rat dep",
        star: 4,
        time: new Date()
    },
    {
        user: "Pham quang thinh",
        avatar: "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng",
        content: "Phong tro rat dep",
        star: 4,
        time: new Date()
    }
]