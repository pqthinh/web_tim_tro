
const fake ={
    img: "bg-warning",
    date: "2020-12-12",
    content: "Spending Alert: We've noticed unusually high spending for your account."
}

const ItemNotifycation = ({thongbao}) =>{ 
    const data = thongbao ||  fake
    const img =  data.img || "bg-warning"

    return (
        <div className="dropdown-item d-flex align-items-center">
            <div className="mr-3">
                <div className={`icon-circle ${img}`}>
                    <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{data.date}</div>
                {(data.content).slice(0,20)+ "..."}
            </div>
        </div>
    )
}
export default ItemNotifycation 