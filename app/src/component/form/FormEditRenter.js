import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "../FormInput"

import axios from "../../fetch/axios";
import baseUrl from '../../fetch/baseurl'

// id_member , id_post , content
// newpass, email , oldpass
const FormEditRenter = ({user}) => {
    const [resp,setResp] = useState(null)
    const handleSendRepassword = async (data) =>{
        const res = await axios.post(`${baseUrl}/user/member/update`, data)
        setResp(res.data.status)
        console.log(res.data)
    }

    const { handleSubmit, handleChange, errors, touched ,  values} = useFormik({
        initialValues: {
            name: user.name,
            phone: user.phone,
            place: user.place,
            oldpass: "",
            newpass: "",
            repass: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không được để trống'),
            phone: Yup.string().required('Không được để trống'),
            place: Yup.string().required('Không được để trống'),
            oldpass: Yup.string().required('Password is required'),
            // newpass: Yup.string().required('Password is required'),
            repass: Yup.string()
                .oneOf([Yup.ref('newpass'), null], 'Phải nhập khớp mật khẩu mới')
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                name: values.name,
                phone: values.phone,
                place: values.place,
                oldpass: values.oldpass,
                newpass: values.newpass,
                email: user.email,
            }
            handleSendRepassword(data)
        }
    })
    return (
        <>
            <p style={{color: 'red', textAlign: 'center'}}>{resp}</p>
            <form action= "" onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    label="Cập nhật tên"
                    required={true}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Họ tên" // thay neu get dc curent user
                    type="text"
                    touched={touched.name}
                    value={values.name}
                />
                <FormInput
                    name="phone"
                    label="Nhập số điện thoại"
                    required={true}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="SĐT" // thay neu get dc curent user
                    type="text"
                    touched={touched.phone}
                    value={values.phone}
                />
                <FormInput
                    name="place"
                    label="Nhập địa chỉ"
                    required={true}
                    onChange={handleChange}
                    error={errors.place}
                    placeholder="Địa chỉ" // thay neu get dc curent user
                    type="text"
                    touched={touched.place}
                    value={values.place}
                />
                <FormInput
                    name="oldpass"
                    label="Mật khẩu cũ"
                    required={true}
                    onChange={handleChange}
                    error={errors.oldpass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    type="password"
                    touched={touched.oldpass}
                />
                <FormInput
                    name="newpass"
                    label="Mật khẩu mới"
                    // required={true}
                    onChange={handleChange}
                    error={errors.newpass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    type="password"
                    touched={touched.newpass}
                />
                <FormInput
                    name="repass"
                    label="Nhập lại mật khẩu mới"
                    // required={true}
                    onChange={handleChange}
                    error={errors.repass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    type="password"
                    touched={touched.repass}
                />
                <button type="submit" className="btn btn-success">Cập nhật</button>
            </form>
        </>
    )
}
export default FormEditRenter