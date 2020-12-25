import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
import ModalAddOwner from '../modal/addOwner';
import ModalEditOwner from '../modal/editOwner';
                  
const TableOwner = () => {
  const [data, setData] = useState({})
  const [row, setRow] = useState([])
  const [res, setRes] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    async function fetchdata() {
      setLoading(true)
      const result =await axios.get(`${baseUrl}/user/owner`)
      if(result.data.length !== row.length) {
          var temp  = result.data
          setRes(result.data)
          temp.map(x=> {
            return(
              x.action = x.status!=="active"? buttonActive(x): buttonDeactive(x) 
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

  const buttonActive = (x) => {
    return (
      <>
        <button className="btn btn-success" onClick={() => { 
          x.status = "active"
          x.action= buttonDeactive(x)
          Active(x.id_owner)
        }}>active</button>
        <span ><ModalEditOwner user={x}/></span>
      </>
    )
  }
  
  const buttonDeactive = (x) => {
    return (
      <div>
        <button className="btn btn-danger" onClick={() => {
          x.status="deactive"
          x.action = buttonActive(x)
          Block(x.id_owner)
        }}>block</button> 
        <span><ModalEditOwner user={x}/></span>
      </div>
    )
  }

  const Active = async(data)=> {
    const result = await axios.post(`${baseUrl}/user/owner/Status`, {id_owner: data, status: "active"})
    console.log(result.data.msg)
  }
  const Block = async (data)=> {
    const result = await axios.post(`${baseUrl}/user/owner/Status`, {id_owner: data, status: "deactive"})
    console.log(result.data.msg)
  }
  
  return (
    <div>
      
      <LoadingMask loading={loading} text={"loading..."}>
        <div style={{ width: "100%", height: "100vh" }}>
        <div><ModalAddOwner/></div>
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

export default TableOwner

const columns = [
  {
      label: 'STT',
      field: 'id_owner',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Email',
      field: 'email',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Phone',
      field: 'phone',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Place',
      field: 'place',
      sort: 'asc',
      width: 100
  },
  {
      label: 'ID',
      field: 'cmt',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Status',
      field: 'status',
      sort: 'asc',
      width: 100
  },
  {
      label: 'Ngày tham gia',
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