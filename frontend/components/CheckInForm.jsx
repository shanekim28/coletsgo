import { useState } from "react";
import { useCookies } from "react-cookie";

const CheckInForm = ({onClose}) => {
  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies(["userId"]);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    const userId = cookies.userId;
    const payload = { userId: userId, userName: name };

    fetch("/api/list", {
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
        const guid = data.guid;
        setCookie("userId", guid);
        console.log("new user");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <form onSubmit={(e) => {
              e.preventDefault(); 
              onClose();
            }}>
        <div className="box">
          <label>
            Name: <input required name="myInput" />
          </label>
          <p>
            What floor of Geisel are you at?:
            <select defaultValue={""} required>
              <option value=""></option>
              <option value="1">1W</option>
              <option value="2">1E</option>
              <option value="3">2W</option>
              <option value="4">2E</option>
            </select>
          </p>
          <input
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </>
  );
};

export default CheckInForm;
