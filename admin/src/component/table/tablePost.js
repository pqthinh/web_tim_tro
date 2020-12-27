import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask"
import "react-loadingmask/dist/react-loadingmask.css"

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
import ModalEditPost from '../post/editPost'
import ModalViewPost from '../modal/viewPost'
import ModalAddDuration from '../modal/addTimeDuration'
                  
const TablePost = () => {
  const [data, setData] = useState({})
  const [row, setRow] = useState([])
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function fetchdata() {
      setLoading(true)
      const result =await axios.get(`${baseUrl}/post/all`)
      if(result.data.length !== row.length) {
          var temp  = result.data
          setRes(result.data)
          temp.map(x=> {
            // console.log(x)
            return(
              x.action = <div>
                  {x.status!=="active"?
                    <button className="btn btn-success" onClick={() => Active(x.postID)}>active</button> :
                    <button className="btn btn-danger" onClick={() => Block(x.postID)}>block</button> 
                  }
                  <span ><ModalEditPost post={x}/></span>
                  <span ><ModalViewPost post={x}/> </span>
                  <span ><ModalAddDuration post={x}/> </span>
                </div>
            )
          })
          setRow(temp)
      }
      else {
        const temp = {columns: columns, rows: row}
        setData(temp)
      }
      setLoading(false)
    }
    fetchdata()
  },[row, res])

  const Active = async(data)=> {
    setLoading(true)
    const result = await axios.post(`${baseUrl}/post/admin/status`, {postID: data, status: "active"})
    console.log(result.data.msg)
    setLoading(false)
  }
  const Block = async (data)=> {
    setLoading(true)
    const result = await axios.post(`${baseUrl}/post/admin/status`, {postID: data, status: "deactive"})
    console.log(result.data.msg)
    setLoading(false)
  }

  return (
    <div>
      
      <LoadingMask loading={loading} text={"loading..."}>
        <div style={{ width: "100%", height: "100vh" }}>

          <MDBDataTable
            striped
            bordered
            small
            data={data}
          /></div>
      </LoadingMask>
    </div>
    
  );
}

export default TablePost

const columns = [
  {
      label: 'STT',
      field: 'postID',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Room ID',
      field: 'roomID',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Tiêu đề',
      field: 'title',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Địa chỉ',
      field: 'address',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Thời gian hiển thị',
      field: 'duration',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Số lượng phòng cho thuê',
      field: 'quantity',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Giá',
      field: 'price',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Tiền cọc',
      field: 'tiencoc',
      sort: 'asc',
      width: 100
  },
  {
    label: 'Giới thiệu',
    field: 'discription',
    sort: 'asc',
    width: 100
  },  
  {
    label: 'Đã cho thuê',
    field: 'available',
    sort: 'asc',
    width: 100
  },
  {
      label: 'Action',
      field: 'action',
      width: 100
  }
]