import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useFormik } from "formik";
function ModalEditNoti({}) {
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
          ReceiverID: "",
          role: "",
          content: ""
        },
        validationSchema: Yup.object({
            ReceiverID:Yup.number().required(message),
            content:Yup.string().required(message)
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
                        <label for="exampleInputReceiverID1">ID người nhận</label>
                        <input name="ReceiverID" class="form-control" id="exampleInputReceiverID1" aria-describedby="emailHelp" placeholder=""
                        required={true} error = {errors.ReceiverID} onChange={handleChange}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputOwnerID1">Role</label>
                        <select name="ownerID" class="form-control" id="exampleInputOwnerID1" placeholder="" onChange={handleChange}>
                            <option>Owner</option>
                            <option>Member</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputContent1">Content</label>
                        <input name="content" class="form-control" id="exampleInputContent1" placeholder=""
                        required={true} error = {errors.content} onChange={handleChange}
                        />
                    </div>
                    <input type="submit" class="btn btn-primary"/>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Send
                </Button>
            </Modal.Footer>
            </Modal>
      </>
    );
}

export default ModalEditNoti;

