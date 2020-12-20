
import TimeAgo from 'react-timeago'

const fake = {
    avatar: "http://localhost:3000/favicon.png",
    content: `Hi there! I am wondering if you can help me with a
    problem I've been having.`,
    name: "",
    date: new Date() 
}

const ItemMessage =  ({message})=>{
    const data = message || fake 
    return (
        <div>
            <div className="dropdown-item d-flex align-items-center">
                <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle avatar" src={data.avatar}
                        alt="" />
                    <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                    <div className="text-truncate">{data.content.slice(0,20)+ "..."}</div>
                    <div className="small text-gray-500">{`${data.name} · `}<TimeAgo date={data.date}/></div>
                </div>
            </div>
        </div>
    )
}
export default ItemMessage