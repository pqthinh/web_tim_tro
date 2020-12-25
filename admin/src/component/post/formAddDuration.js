import React, {useState} from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "../FormInput"

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'

// id_member , id_post , content
const AddTimeNews = ({post}) => {
    const id_post =  post.postID, id_owner =  post.id_owner
    const [respon, setRespon] = useState(null)
    const handleRespon = async (data) =>{
        const resp1 =  await axios.post(`${baseUrl}/post/admin/duration`, data)
        // cap nhat hạn cho post
        setRespon(resp1.data.msg)
        // api them thong bao nay vao bang `thongbaoAdmin`
        let res =  await axios.post(`${baseUrl}/notification/post/giahan`, data)
        console.log(res.data)
    }

    const { handleSubmit, handleChange, errors, touched} = useFormik({
        initialValues: {
            description: '',
            duration: '',
        },
        validationSchema: Yup.object({
            description: Yup.string(),
            duration: Yup.number().required("Phải nhâp số ngày cần gia hạn")
        }),
        onSubmit: (values)=> {
            
            let data = {
                content: values.description,
                id_owner: id_owner,
                id_post: id_post,
                duration: values.duration,
            }
            // console.log(data)
            handleRespon(data)
        }
    })
    return (
        <>
            <p style={{color: 'red', textAlign: 'center'}}>{respon}</p>
            <form action= "" onSubmit={handleSubmit}>
                <FormInput
                    name="duration"
                    onChange={handleChange}
                    label="Bạn muốn gia hạn thêm bao lâu? "
                    required={true}
                    error={errors.duration}
                    type="number"
                    touched={touched.duration}
                />
                <FormInput
                    typeInput="textaria"
                    name="description"
                    onChange={handleChange}
                    label="Lời nhắn "
                    required={true}
                    placeholder="Nhắn  ..."
                    error={errors.description}
                    touched={touched.description}
                />
                <button type="submit" className="btn btn-danger">Thông báo gia hạn tin</button>
            </form>
        </>
    )
}
export default AddTimeNews