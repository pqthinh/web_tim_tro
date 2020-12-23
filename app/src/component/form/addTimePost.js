import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik' 
import { FormInput } from "../FormInput"

// id_member , id_post , content
const AddTimeNews = ({id_post, id_owner}) => {

    const handleSendReport = (data) =>{
        console.log(data)
        // api them thong bao nay vao bang `thongbao`
    }

    const { handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            description: '',
            duration: '',
        },
        validationSchema: Yup.object({
            description: Yup.string()
            .required("Không được để trống trường này")
            .min(10, 'Độ dài tối thiểu là 10')
            .max(250, 'Tối đa 250 ký tự'),
            duration: Yup.number().required("Phải nhâp số ngày cần gia hạn")
        }),
        onSubmit: (values)=> {
            console.log(values)
            let data = {
                content: values.description,
                id_owner: id_owner,
                id_post: id_post,
                duration: values.duration,
            }
            handleSendReport(data)
        }
    })
    return (
        <>
            <form action= "" onSubmit={handleSubmit}>
                <FormInput
                    name="duration"
                    onChange={handleChange}
                    label="Bạn muốn gia hạn thêm bao lâu? "
                    required={true}
                    error={errors.duration}
                    type="number"
                />
                <FormInput
                    typeInput="textaria"
                    name="description"
                    onChange={handleChange}
                    label="Lời nhắn "
                    required={true}
                    placeholder="Nhắn  ..."
                    error={errors.description}
                />
                <button type="submit" className="btn btn-danger">Thông báo gia hạn tin</button>
            </form>
        </>
    )
}
export default AddTimeNews