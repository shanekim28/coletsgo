import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import CheckInFormCSS from './CheckInForm.module.css';

const useOnce = (cb) => {
  const [called, setCalled] = useState(false);

  return (e) => {
    e.preventDefault();
    if (!called) {
      setCalled(true);
      cb(e);
    }
  }
}

const CheckInForm = ({onClose}) => {
  const [name, setName] = useState("");
  const [floor, setFloor] = useState("");

  useEffect(() => { 
    // gets inputs previous set
    const storedName = Cookies.get('name');
    const storedFloor = Cookies.get('floor');

    // sets the form's inputs
    if (storedName && storedFloor) {
      setName(storedName);
      setFloor(storedFloor);
    }
  }, []);

  const handleSubmit = useOnce((e) => {

    Cookies.set('name', name);
    Cookies.set('floor', floor);

    const payload = { 
      userId: Cookies.get('userId'), 
      name: Cookies.get('name'),
      floor: Cookies.get('floor')
    };

    fetch(`${process.env.REACT_APP_API_URL}/api/list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        onClose();
        Cookies.set('userId', data.userId);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
      });
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={CheckInFormCSS.inputContainer}>
          <label>
            <input className={CheckInFormCSS.name} required name="myInput" placeholder="NAME" value={name} maxlength="12" onChange={(e) => setName(e.target.value)}/>
          </label>
          <h2>IN<br/><br/></h2>
          <p>
            <select id="floor" className={CheckInFormCSS.floor} required value={floor} onChange={(e) => setFloor(e.target.value)}>
              <option value="" disabled>FLOOR</option>
              <option value="1W">1W</option>
              <option value="1E">1E</option>
              <option value="2W">2W</option>
              <option value="2E">2E</option>
            </select>
          </p>
          <input
            id="submitBtn"
            className={CheckInFormCSS.submitBtn}
            type="submit"
            value="ADD ME!"
          ></input>
        </div>
      </form>
    </>
  );
};

export default CheckInForm;
