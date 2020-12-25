import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'

import * as Yup from "yup";
import { useFormik } from "formik";
import { FormInput } from "../FormInput";

function ModalAddOwner() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [resp, setResp] = useState(null)

    const addOwner = async (user) => {
        const result = await axios.post(`${baseUrl}/user/owner/signup`, user)
        setResp(result.data.status)
    }
    const message = "Vui lòng nhập đúng định dạng!";
      const { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
          email: "",
          password: "",
          FullName: "",
          IDNumber: "",
          PhoneNumber: "",
          Address: ""
        },
        validationSchema: Yup.object({
            email:Yup.string().required(message),
            password:Yup.string().required(message),
            FullName:Yup.string().required(message),
            IDNumber:Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must 10 - 12 digits')
            .max(12, 'Must 10 - 12 digits'),
            PhoneNumber:Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must 10 digits')
            .max(10, 'Must 10 digits'),
            Address:Yup.string().required(message),
        }),
        onSubmit: (value) => {
            let data = {
                name: value.FullName,
                email: value.email,
                cmt: value.IDNumber,
                phone: value.PhoneNumber,
                password: value.password,
                place: value.Address
            }
            // console.log(data)
            addOwner(data)
        },
    });
    return (
      <>
        <button className="btn btn-success float-right" onClick={handleShow}>
            Add owner <i class="fas fa-plus-circle"></i>
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới chủ cho thuê phòng</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <p style={{color: 'red', textAlign: 'center'}}>{resp}</p>
            <form action="" onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    label="Email"
                    required={true}
                    onChange={handleChange}
                    error={errors.email}
                    touched={touched}
                    placeholder="Nhập email"
                />
                {/* <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    required={true} error = {errors.password} onChange={handleChange} touched={touched}
                    />
                </div> */}
                <FormInput
                    name="password"
                    label="Password"
                    required={true}
                    onChange={handleChange}
                    error={errors.password}
                    touched={touched}
                    placeholder="Nhập password"
                    type="password"
                />
                {/* <div class="form-group">
                    <label for="exampleInputFullName1">Full Name</label>
                    <input name="FullName" class="form-control" id="exampleInputFullName1" placeholder="Full Name"
                    required={true} error = {errors.FullName} onChange={handleChange} touched={touched}
                    />
                </div> */}
                <FormInput
                    name="FullName"
                    label="FullName"
                    required={true}
                    onChange={handleChange}
                    error={errors.password}
                    touched={touched}
                    placeholder="Nhập FullName"
                />
                {/* <div class="form-group">
                    <label for="exampleInputIDNumber1">ID Number</label>
                    <input name="IDNumber" class="form-control" id="exampleInputIDNumber1" placeholder="ID Number"
                    required={true} error = {errors.IDNumber} onChange={handleChange} touched={touched}
                    />
                    {errors.IDNumber && <p>{errors.IDNumber.message}</p>}
                </div> */}
                <FormInput
                    name="IDNumber"
                    label="IDNumber"
                    required={true}
                    onChange={handleChange}
                    error={errors.IDNumber}
                    touched={touched}
                    placeholder="Nhập IDNumber"
                />
                {/* <div class="form-group">
                    <label for="exampleInputPhoneNumber1">Phone number</label>
                    <input name="PhoneNumber" class="form-control" id="exampleInputPhoneNumber1" placeholder="Phone number"
                    required={true} error = {errors.PhoneNumber} onChange={handleChange} touched={touched}
                    />
                </div> */}
                <FormInput
                    name="PhoneNumber"
                    label="PhoneNumber"
                    required={true}
                    onChange={handleChange}
                    error={errors.PhoneNumber}
                    touched={touched}
                    placeholder="Nhập PhoneNumber"
                />
                {/* <div class="form-group">
                    <label for="exampleInputAddress1">Address</label>
                    <input name="Address" class="form-control" id="exampleInputAddress1" placeholder="Address"
                    required={true} error = {errors.Address} onChange={handleChange} touched={touched.Address}
                    />
                </div> */}
                <FormInput
                    name="Address"
                    label="Address"
                    required={true}
                    onChange={handleChange}
                    error={errors.Address}
                    touched={touched}
                    placeholder="Nhập Address"
                />

                <input type="submit" class="btn btn-success" value="Thêm owner"/>
            </form>
        </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalAddOwner;


