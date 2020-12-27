
import TimeAgo from 'react-timeago'

const fake ={
    name: "Pham quang thinh",
    avatar: "https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng",
    comment: "Phong tro rat dep",
    star: 4,
    createAt: new Date()
}

const CommentItem = ({comment}) =>{
    const data = comment || fake

    const rateStar = (n)=>{
        var arr = []
        for(let i=0 ;i <n; i++) 
            arr.push(<span class="float-right"><i class="text-warning fa fa-star"></i></span>)
        return arr
    }
    return (
        <>
    <div class="card">
	    <div class="card-body">
	        <div class="row">
        	    <div class="col-md-2">
        	        <img src={data.avatar} class="img img-rounded img-fluid avatar" alt={data.avatar}/>
        	    </div>
        	    <div class="col-md-10">
                    <p>
                        <a class="float-left" href="!#"><strong>{data.name}</strong></a>
                        {(rateStar(data.star)).map(i=><span class="float-right" key={i}><i class="text-warning fa fa-star"></i></span>)}
                
                    </p>
                    <div class="clearfix"></div>
                    <p class="text-secondary text-center float-left"><TimeAgo date={data.createAt}/></p>
        	        <div class="clearfix"></div>

        	        <p>{data.comment}</p>
        	        <p>
        	            <a class="float-right btn btn-outline-primary ml-2" href="!#"> <i class="fa fa-reply"></i> Reply</a>
        	            <a class="float-right btn text-white btn-danger" href="!#"> <i class="fa fa-heart"></i> Like</a>
        	       </p>
        	    </div>
	        </div>
	    </div>
	</div>
        </>
    )
}
export default CommentItem