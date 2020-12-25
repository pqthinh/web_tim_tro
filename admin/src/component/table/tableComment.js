import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask"
import "react-loadingmask/dist/react-loadingmask.css"

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'

const TableReview = () => {
  const [data, setData] = useState({})
  const [row, setRow] = useState([])
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function fetchdata() {
      setLoading(true)
      const result =await axios.get(`${baseUrl}/comment/admin/all`)
      if(result.data.review.length !== row.length) {
          var temp  = result.data.review
          setRes(result.data.review)
          console.log(temp)
          temp && temp.map(x=> {
            return(
              x.action = <div>
                  {x.status!=="active"?
                    buttonActive(x): buttonDeactive(x) 
                  }
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
  },[res])

  const buttonActive = (x) => {
    return (
      <button className="btn btn-success" onClick={() => { 
        x.status = "active"
        x.action=buttonDeactive(x)
        Active(x.id)
      }}>active</button>
    )
  }
  
  const buttonDeactive = (x) => {
    return (
      <button className="btn btn-danger" onClick={() => {
        x.status="deactive"
        x.action =buttonActive(x)
        Block(x.id)
      }}>block</button> 
    )
  }

  const Active = async(data)=> {
    const result = await axios.post(`${baseUrl}/comment/admin/check`, {id: data})
    console.log(result.data.msg)
  }
  const Block = async (data)=> {
    const result = await axios.post(`${baseUrl}/comment/admin/check`, {id: data, status: "deactive"})
    console.log(result.data.msg)
  }

  return (
    <div>
      
      <LoadingMask loading={loading} text={"loading..."}>
        <div style={{ width: "100%", height: "100vh" }}>
        <div></div>
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

export default TableReview

const columns = [
  {
      label: 'STT',
      field: 'id',
      sort: 'asc',
      width: 100
  },
  {
    label: 'Tin đăng',
    field: 'id_post',
    sort: 'asc',
    width: 100
  },
  {
      label: 'Người nhận xét',
      field: 'id_member',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Nhận xét',
      field: 'comment',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Đánh giá',
      field: 'star',
      sort: 'asc',
      width: 50
  },
  {
      label: 'Status',
      field: 'status',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Ngày nhận xét',
      field: 'createAt',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Action',
      field: 'action',
      width: 100
  }
]