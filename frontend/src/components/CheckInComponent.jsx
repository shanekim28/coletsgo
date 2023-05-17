import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CheckInForm from "./CheckInForm";
import ToggleButton from "./ToggleButton";

function CheckInComponent() {
  const [show, setShow] = useState(false);
  const [isIn, setIsIn] = useState(false);

  const close = () => {
    setShow(false);
  }
  const cancel = () => {
    setIsIn(false);
    setShow(false);
  }
  const handleClick = () => {
    setIsIn(!isIn); 
    !isIn && setShow(true)
  };

  return (
    <>
        <ToggleButton onClick={handleClick} isIn={isIn}/>
        <Modal show={show} onHide={cancel}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <CheckInForm onClose={close} />
            </Modal.Body>
        </Modal>
    </>
  );
}

export default CheckInComponent;
