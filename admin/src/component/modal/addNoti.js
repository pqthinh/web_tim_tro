import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

import * as Yup from "yup";
import { useFormik } from "formik";

import { FormInput } from '../FormInput'
import axios from 'axios';
import baseUrl from '../../fetch/baseurl';

function ModalAddNoti({}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [resp, setResp] = useState(null)
    const option = [
      {code: "owner", name: "owner"},
      {code: "renter", name: "renter"}
    ]

    const addToNoti =async (data) =>{
      const res =  await axios.post(`${baseUrl}/notification/post/state`, data)
      console.log(res.data.msg)
      setResp(res.data.msg)
    }

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
          // console.log(value);
          let data ={
            id_owner: value.ReceiverID,
            content: value.content
          }
          addToNoti(data)
        },
    });
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Thêm thông báo  <i class="fas fa-plus-circle"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm thông báo đến chủ nhà</Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <p style={{color: 'red', textAlign: 'center'}}>{resp}</p>
            <form action="" onSubmit={handleSubmit}>
              <FormInput
                name="ReceiverID"
                label="ID người nhận"
                required={true}
                onChange={handleChange}
                error={errors.ReceiverID}
                touched={touched}
                placeholder="ID người nhận"
              />
              <FormInput
                name="role"
                label="Loại"
                required={true}
                error={errors.role}
                listOption={option}
                touched={touched}
                onChange={handleChange}
                typeInput="select"
              />
              <FormInput
                  name="content"
                  label="Thông báo"
                  required={true}
                  onChange={handleChange}
                  error={errors.content}
                  touched={touched}
                  placeholder="Nhập nội dung"
                  typeInput="textaria"
              />
                    {/* <div class="form-group">
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
                    </div> */}
                    <input type="submit" class="btn btn-primary" value="Thêm thông báo"/>
                </form>
            </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalAddNoti;

