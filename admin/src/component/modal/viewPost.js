import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import ViewPost from '../post/viewPost';

const ModalViewPost = ({post}) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            View  <i class="fas fa-binoculars"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Xem tin đăng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ViewPost post={post}/>
          </Modal.Body>
        </Modal>
        </>
    );
}
export default ModalViewPost