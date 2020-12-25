import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask"
import "react-loadingmask/dist/react-loadingmask.css"

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
import ModalAddNoti from '../modal/addNoti' 

const TableNoti = () => {
    const [data, setData] = useState({})
    const [row, setRow] = useState([])
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      async function fetchdata() {
        setLoading(true)
        const result =await axios.get(`${baseUrl}/notification`)
        if(result.data.length !== row.length) {
            var temp  = result.data
            setRes(result.data)
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
      label: 'Ngày gửi',
      field: 'createAt',
      width: 100
  }
]