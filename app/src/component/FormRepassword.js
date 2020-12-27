import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "./FormInput"
import axios from 'axios'

// id_member , id_post , content
// newpass, email , oldpass
const FormRepassword = ({email}) => {

    const handleSendRepassword = async(data) =>{
        console.log(data)
        // cho owner
        let res = await axios.post('/user/owner/repass', {data})
        alert(res.data.status)
    }

    const { handleSubmit, handleChange, errors , touched} = useFormik({
        initialValues: {
            oldpass: '',
            newpass: "",
            repass: "",
        },
        validationSchema: Yup.object({
            oldpass: Yup.string().required('Password is required'),
            newpass: Yup.string().required('Password is required'),
            repass: Yup.string()
                .oneOf([Yup.ref('newpass'), null], 'Phải nhập khớp mật khẩu mới')
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                oldpass: values.oldpass,
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
                    name="oldpass"
                    label="Mật khẩu cũ"
                    required={true}
                    onChange={handleChange}
                    error={errors.oldpass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    touched={touched.oldpass}
                    type="password"
                />
                <FormInput
                    name="newpass"
                    label="Mật khẩu mới"
                    required={true}
                    onChange={handleChange}
                    error={errors.newpass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    touched={touched.newpass}
                    type="password"
                />
                <FormInput
                    name="repass"
                    label="Nhập lại mật khẩu mới"
                    required={true}
                    onChange={handleChange}
                    error={errors.repass}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    touched={touched.repass}
                    type="password"
                />
                <button type="submit" className="btn btn-success">Thay đổi </button>
            </form>
        </>
    )
}
export default FormRepassword