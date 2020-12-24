import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact'
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
                  
const TableMember = () => {
    const [data, setData] = useState({})
    const [row, setRow] = useState([])
    const [res, setRes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function fetchdata() {
            setLoading(true)
            const result =await axios.get(`${baseUrl}/user/member`)
            if(result.data.length !== row.length) {
                if(JSON.stringify(result.data) !== JSON.stringify(res)) {
                    var temp  = result.data
                    setRes(result.data)
                    temp.map(x=> {
                        return (
                            x.img = <img src ={x.avatar} alt= {`avatar của ${x.name}`} width = {50} height = {50}/>
                        )
                    })
                    setRow(temp)
                }
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

export default TableMember

const columns = [
    {
        label: 'STT',
        field: 'id',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Avatar',
        field: 'img',
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
        label: 'Ngày tham gia',
        field: 'createAt',
        sort: 'asc',
        width: 100
    }
]