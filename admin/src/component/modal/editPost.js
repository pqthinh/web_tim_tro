import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useFormik } from "formik";
function ModalEditPost({user}) {
    // const user= user
    // alert(user)
    // console.log(user)
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
          title: "",
          duration: "",
          quantity: "",
          price: "",
          deposit: "",
          description: "",
          rented:"",
          address:""
        },
        validationSchema: Yup.object({
            title:Yup.string().required(message),
            duration:Yup.number().required(message),
            quantity:Yup.number().required(message),
            price:Yup.number().required(message),
            deposit:Yup.number().required(message),
            address:Yup.string().required(message),
            rented:Yup.number().required(message),
            description:Yup.string().required(message),
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
            <Button variant="primary" onClick={handleShow}>
            Edit  <i class="fas fa-user-edit"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Chỉnh sửa thông tin chủ nhà trọ</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <form action="">
                    <div class="form-group">
                        <label for="exampleInputTitle1">Tiêu đề</label>
                        <input name="title" class="form-control" id="exampleInputTitle1" aria-describedby="emailHelp" placeholder=""
                        required={true} error = {errors.title} onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAddress1">Địa chỉ</label>
                        <input name="address"  class="form-control" id="exampleInputAddress1" placeholder=""
                        required={true} error = {errors.address} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputDuration1">Thời gian hiển thị</label>
                        <input name="duration" class="form-control" id="exampleInputDuration1" placeholder=""
                        required={true} error = {errors.duration} onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputQuantity1">Số lượng phòng cho thuê</label>
                        <input name="quantity" class="form-control" id="exampleInputQuantity1" placeholder=""
                        required={true} error = {errors.quantity} onChange={handleChange}/>
                        {errors.IDNumber && <p>{errors.quantity}</p>}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPrice1">Giá</label>
                        <input name="price" class="form-control" id="exampleInputPrice1" placeholder=""
                        required={true} error = {errors.price} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputDescription1">Giới thiệu</label>
                        <input name="description" class="form-control" id="exampleInputDescription1" placeholder=""
                        required={true} error = {errors.description} onChange={handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputRented1">Đã cho thuê</label>
                        <input name="rented" class="form-control" id="exampleInputRented1" placeholder=""
                        required={true} error = {errors.rented} onChange={handleChange}/>
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

export default ModalEditPost;
