import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

import AddTimeNews from '../post/formAddDuration';

function ModalAddDuration({post}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="btn btn-success float-right" onClick={handleShow}>
            Renewal<i class="fas fa-plus-circle"></i>
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Gia hạn tin {post.postID} theo yêu cầu</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <AddTimeNews post={post}/>
        </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalAddDuration;


