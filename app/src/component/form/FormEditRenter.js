import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "../FormInput"

// id_member , id_post , content
// newpass, email , oldpass
const FormEditRenter = ({email}) => {

    const handleSendRepassword = (data) =>{
        console.log(data)
    }

    const { handleSubmit, handleChange, errors, touched} = useFormik({
        initialValues: {
            name: "",
            phone: "",
            place: "",
            oldpass: '',
            newpass: "",
            repass: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không được để trống'),
            phone: Yup.string().required('Không được để trống'),
            place: Yup.string().required('Không được để trống'),
            oldpass: Yup.string().required('Password is required'),
            newpass: Yup.string().required('Password is required'),
            repass: Yup.string()
                .oneOf([Yup.ref('newpass'), null], 'Phải nhập khớp mật khẩu mới')
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                name: values.name,
                phone: values.phone,
                place: values.place,
                oldpass: values.description,
                newpass: values.newpass,
                email: email,
            }
            handleSendRepassword(data)
        }
    })
    return (
        <>
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
                    required={true}
                    onChange={handleChange}
                    error={errors.newpass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    type="password"
                    touched={touched.newpass}
                />
                <FormInput
                    name="repass"
                    label="Nhập lại mật khẩu mới"
                    required={true}
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