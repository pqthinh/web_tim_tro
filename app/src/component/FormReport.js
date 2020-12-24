import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "./FormInput"

// id_member , id_post , content
const FormReport = ({id_post, id_member}) => {

    const handleSendReport = (data) =>{
        console.log(data)
    }

    const { handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            description: ''
        },
        validationSchema: Yup.object({
            description: Yup.string()
            .required("Không được để trống trường này")
            .min(10, 'Độ dài tối thiểu là 10')
            .max(250, 'Tối đa 250 ký tự')
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                content: values.description,
                id_member: id_member,
                id_post: id_post
            }
            handleSendReport(data)
        }
    })
    return (
        <>
            <form action= "" onSubmit={handleSubmit}>
                <FormInput
                    typeInput="textaria"
                    name="description"
                    onChange={handleChange}
                    label="Báo cáo tin đăng "
                    required={true}
                    placeholder="Mô tả thông tin bạn cho là vi phạm/không hợp lệ ..."
                    error={errors.description}
                    
                />
                <button type="submit" className="btn btn-danger">Báo cáo tin</button>
            </form>
        </>
    )
}
export default FormReport