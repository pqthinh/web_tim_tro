import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
                  
const TableReport = () => {
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
                          <button className="btn btn-success" onClick={() => Active(x.id_owner)}>active</button> :
                          <button className="btn btn-danger" onClick={() => Block(x.id_owner)}>block</button> 
                        }
                        
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
      
        const Active = async(data)=> {
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

export default TableReport

const columns = [
    {
        label: 'STT',
        field: 'id',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Post ID',
        field: 'id_post',
        width: 100
    },
    {
        label: 'Member ID',
        field: 'id_member',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Nội dung',
        field: 'content',
        sort: 'asc',
        width: 100
    }
]