import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

import * as Yup from "yup";
import { useFormik } from "formik";

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'

function ModalEditOwner({user}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [resp, setResp] = useState(null)

    const message = "Vui lòng nhập đúng định dạng!";

    const updateOwner = async (user) => {
      const result = await axios.post(`${baseUrl}/user/owner/update`, user)
      setResp(result.data.status)
    }

    const { handleSubmit, handleChange, errors, touched ,values } = useFormik({
      initialValues: {
        FullName: user.name,
        IDNumber: user.cmt,
        PhoneNumber: user.phone,
        Address: user.place,
        password: user.password,
        
      },
      validationSchema: Yup.object({
          FullName:Yup.string().required(message),
          IDNumber:Yup.string()
          .required(message)
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(9, 'Must be exactly 12 digits')
          .max(12, 'Must be exactly 12 digits'),
          PhoneNumber:Yup.number().required(message),
          Address:Yup.string().required(message),
      }),
      onSubmit: (value) => {
        // console.log(value);
        let data = {
          name: value.FullName,
          cmt : value.IDNumber,
          place: value.Address,
          email: user.email,
          phone: value.phone,
          newpass: value.password,
          oldpass: user.password
        }
        // console.log(data)
        updateOwner(data)
      }
    })

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Edit  <i class="fas fa-user-edit"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Chỉnh sửa thông tin chủ nhà trọ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p style={{color: 'red', textAlign: 'center'}}>{resp}</p>
              <form action="" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputFullName1">Full Name</label>
                        <input name="FullName" class="form-control" id="exampleInputFullName1" value={values.FullName}
                        required={true} error = {errors.FullName} onChange={handleChange} touched={touched.FullName}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputIDNumber1">ID Number</label>
                        <input name="IDNumber" class="form-control" id="exampleInputIDNumber1" value={values.IDNumber}
                        required={true} error = {errors.IDNumber} onChange={handleChange} touched={touched.IDNumber}
                        />
                        {errors.IDNumber && <p>{errors.IDNumber.message}</p>}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPhoneNumber1">Phone number</label>
                        <input name="PhoneNumber" class="form-control" id="exampleInputPhoneNumber1" value={values.PhoneNumber}
                        required={true} error = {errors.PhoneNumber} onChange={handleChange} touched={touched.PhoneNumber}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAddress1">Address</label>
                        <input name="Address" type="text" class="form-control" id="exampleInputAddress1" value={values.Address}
                        required={true} error = {errors.Address} onChange={handleChange} touched={touched.Address}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">New password</label>
                        <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu mới"
                         onChange={handleChange}touched={touched.password}
                        />  
                    </div>

                    <input type="submit" class="btn btn-success" value="Cập nhật thông tin"/>
                </form>
            </Modal.Body>
          </Modal>
      </>
    );
}

export default ModalEditOwner;

