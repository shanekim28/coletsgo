import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CheckInForm from "./CheckInForm";
import ToggleButton from "./ToggleButton";
import Cookies from 'js-cookie';

function CheckInComponent() {
  const [show, setShow] = useState(false);
  const [isIn, setIsIn] = useState(false);
  const myCookie = Cookies.get('userId');

  useEffect(() => { 
    cookieSet();
  }, []);

  const close = () => {
    setShow(false);
  }
  const cancel = () => {
    setIsIn(false);
    setShow(false);
  }
  // if cookie is already set
  const cookieSet = () => {
    if(myCookie){
      setIsIn(true);
    }
  }
  const handleClick = () => {
    setIsIn(!isIn); 
    !isIn && setShow(true)
    if (isIn) {
      Cookies.set('userId', null);
    }
  };

  return (
    <>
      <ToggleButton onClick={() => handleClick()} isIn={isIn}/>
        <Modal show={show} onHide={cancel}>
          <Modal.Header closeButton/>
          <Modal.Body>
            <CheckInForm onClose={close} />
          </Modal.Body>
        </Modal>
    </>
  );
}

export default CheckInComponent;
