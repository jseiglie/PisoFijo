import React, { useState } from 'react';

import "../../styles/filter.css";

import MapExample from "../../img/MapExample.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import DetailsCard from "../component/DetailsCard.js"

const ModalDetailsCard = (props) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = (ev) => {
        setShow(true);
        props.handleShow(ev);
    };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
    )};
  
  export default ModalDetailsCard;