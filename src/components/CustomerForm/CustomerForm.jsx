import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

function CustomerForm() {
       
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const dispatch = useDispatch();

  const enterName = (event) => {
    setName(event.target.value);
  };

  const enterAddress = (event) => {
    setAddress(event.target.value);
  };

  const enterCity = (event) => {
    setCity(event.target.value);
  };

  const enterZip = (event) => {
    setZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "" || address === "" || city === "" || zip === "") {
      alert("Please fill out all info");
    } else {
      const data = {
        name: name,
        address: address,
        city: city,
        zip: zip,
      };
      // dispatch(addInfo(data));
      dispatch({
        type: "SET_CUST_INFO",
        payload: data,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Step 2: Customer Information</h1>
      <input
        id="Name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={enterName}
      ></input>
      <div>
        <input
          id="Address"
          type="text"
          placeholder="Street Address"
          value={address}
          onChange={enterAddress}
        ></input>
      </div>
      <div>
        <input
          id="City"
          type="text"
          placeholder="City"
          value={city}
          onChange={enterCity}
        ></input>
      </div>
      <div>
        <input
          id="Zip"
          type="text"
          placeholder="Zip"
          value={zip}
          onChange={enterZip}
        ></input>
      </div>
      <div>
        <input
          type="radio"
          id="Pickup"
          name="Preferance"
          value="Pickup"
        ></input>
        <label>Pickup</label>
      </div>
      <div>
        <input
          type="radio"
          id="Delivery"
          name="Preferance"
          value="Delivery"
        ></input>
        <label>Delivery</label>
      </div>
      <Link to="/checkout">
        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </Link>
    </form>
  );
}

export default CustomerForm;
