import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "./FormInput"

// id_member , id_post , content
// newpass, email , oldpass
const FormRepassword = ({email}) => {

    const handleSendRepassword = (data) =>{
        console.log(data)
    }

    const { handleSubmit, handleChange, errors} = useFormik({
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
                oldpass: values.description,
                newpass: id_member,
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
                    error={errors.price}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    typeWidth="large"
                    type="password"
                />
                <FormInput
                    name="newpass"
                    label="Mật khẩu mới"
                    required={true}
                    onChange={handleChange}
                    error={errors.price}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    typeWidth="large"
                    type="password"
                />
                <FormInput
                    name="repass"
                    label="Nhập lại mật khẩu mới"
                    required={true}
                    onChange={handleChange}
                    error={errors.price}
                    placeholder="mat khau cu" // thay neu get dc curent user
                    typeWidth="large"
                    type="password"
                />
                <button type="submit" className="btn btn-danger">Báo cáo tin</button>
            </form>
        </>
    )
}
export default FormRepassword