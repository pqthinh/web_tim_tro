import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useFormik } from "formik";
function ModalAddOwner() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [FullName, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [sdt, setSdt] = useState(null)
    const [cmt, setCmt] = useState(null)
    const [place, setPlace] = useState(null)
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
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits'),
            PhoneNumber:Yup.number().required(message),
            Address:Yup.string().required(message),
        }),
        onSubmit: (value) => {
          console.log(value);
        },
    });
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
            <button className="btn btn-success float-right" onClick={handleShow}>
                Add owner <i class="fas fa-plus-circle"></i>
            </button>
            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới chủ cho thuê phòng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form action="">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        required={true} error = {errors.email} onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                        required={true} error = {errors.password} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputFullName1">Full Name</label>
                        <input name="FullName" class="form-control" id="exampleInputFullName1" placeholder="Full Name"
                        required={true} error = {errors.FullName} onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputIDNumber1">ID Number</label>
                        <input name="IDNumber" class="form-control" id="exampleInputIDNumber1" placeholder="ID Number"
                        required={true} error = {errors.IDNumber} onChange={handleChange}/>
                        {errors.IDNumber && <p>{errors.IDNumber.message}</p>}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPhoneNumber1">Phone number</label>
                        <input name="PhoneNumber" class="form-control" id="exampleInputPhoneNumber1" placeholder="Phone number"
                        required={true} error = {errors.PhoneNumber} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAddress1">Address</label>
                        <input name="Address" class="form-control" id="exampleInputAddress1" placeholder="Address"
                        required={true} error = {errors.Address} onChange={handleChange}/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <input type="submit" class="btn btn-primary"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
      </>
    );
}

export default ModalAddOwner;


