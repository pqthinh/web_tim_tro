import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
import ModalEditNoti from '../modal/editNoti';  
import ModalAddNoti from '../modal/addNoti'    ;
const TableNoti = () => {
    const [data, setData] = useState({})
    const [row, setRow] = useState([])
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(false)

        useEffect(()=>{
          async function fetchdata() {
            setLoading(true)
            const result =await axios.get(`${baseUrl}/user/owner`)
            if(result.data.length !== row.length) {
              //if(JSON.stringify(result.data) !== JSON.stringify(res)) {
                var temp  = result.data
                setRes(result.data)
                temp.map(x=> {
                  console.log(x)
                  return(
                    x.action = <div>
                        {x.status!=="active"?
                          <button className="btn btn-success" onClick={() => Send(x.id_owner)}>Send</button> :
                          <button className="btn btn-danger" onClick={() => Block(x.id_owner)}>block</button> 
                        }
                        <span onClick={()=> Edit(x.id_owner)}><ModalEditNoti/></span>
                      </div>
                  )
                  
                })
                setRow(temp)
              // }
            }
            else {
              const temp = {columns: columns, rows: row}
              // console.log(temp)
              setData(temp)
            }
            setLoading(false)
          }
          fetchdata()
        },[row, res])
      
        const Send = async(data)=> {
          setLoading(true)
          const result = await axios.post(`${baseUrl}/user/owner/Status`, {id_owner: data, status: "active"})
          console.log(result.data.msg)
          setLoading(false)
        }
        const Block = async (data)=> {
          setLoading(true)
          const result = await axios.post(`${baseUrl}/user/owner/Status`, {id_owner: data, status: "deactive"})
          console.log(result.data.msg)
          setLoading(false)
        }
        const Edit = (data) =>{
      
        }
    return (
        <div>
        
        <LoadingMask loading={loading} text={"loading..."}>
            <div style={{ width: "100%", height: "100vh" }}>
            <div><ModalAddNoti/></div>
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

export default TableNoti

const columns = [
    {
        label: 'STT',
        field: 'id',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Loại',
        field: 'role',
        width: 100
    },
    {
        label: 'ID người nhận',
        field: 'id_nguoinhan',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Nội dung',
        field: 'content',
        sort: 'asc',
        width: 100
    },
    {
      label: 'Action',
      field: 'action',
      width: 100
  }
]