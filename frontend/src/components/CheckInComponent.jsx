import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CheckInForm from "./CheckInForm";
import ToggleButton from "./ToggleButton";
import Cookies from 'js-cookie';

function CheckInComponent() {
  const [show, setShow] = useState(false);
  const [isIn, setIsIn] = useState(false);
  const myCookie = Cookies.get('userId');

  const fetchDelete = () => {
    if (isIn) {
      setIsIn(!isIn); 
      fetch(`${process.env.REACT_APP_API_URL}/api/list`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: Cookies.get('userId')
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        Cookies.set('userId', null);
        Cookies.remove('userId');
      });
    }
  }

  useEffect(() => { 
    cookieSet();
  }, []);
  useEffect(() => {
    return () => {
      window.addEventListener("beforeunload", function(e) {
        fetchDelete();
      });
   }
  });

  const handleClick = () => {
    setIsIn(!isIn); 
    !isIn && setShow(true);
    fetchDelete();
  }
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
