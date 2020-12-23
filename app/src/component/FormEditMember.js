import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "./FormInput"

// body: name ,newpass ,oldpass ,email, phone , place // email va id la ko the thya doi
const FormEditMember = ({email}) => {
    // get curent user
    // set init values = curent user
    // giờ để tạm là rỗng
    const handleSendRequestUpdate = (data) =>{
        console.log(data)
    }

    const { handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: '',
            newpass: '',
            repass : "",
            phone: "",
            place: "",
            oldpass: "",
        },
        validationSchema: Yup.object({
            newpass: Yup.string()
            .required("Không được để trống trường này")
            .min(10, 'Độ dài tối thiểu là 10')
            .max(100, 'Tối đa 250 ký tự')
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                name: values.name,
                newpass: values.newpass,
                oldpass: values.oldpass,
                phone: values.phone,
                place: values.place
            }
            handleSendRequestUpdate(data)
        }
    })
    return (
        <>
            <form action= "" onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    label="Họ tên: "
                    required={true}
                    onChange={handleChange}
                    placeholder="Họ tên: "
                    typeWidth="large"
                />
                <FormInput
                    name="phone"
                    label="Số điện thoại"
                    required={true}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                    typeWidth="large"
                />
                <FormInput
                    name="place"
                    label="Địa chỉ: "
                    required={true}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                    typeWidth="large"
                />
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
                <button type="submit" className="btn btn-success">Cập nhật thông tin </button>
            </form>
        </>
    )
}
export default FormEditMember