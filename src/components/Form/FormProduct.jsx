import React, { useState } from "react";
import "./style.css";
import {adminLogin} from "../../service/authService"

function FormProduct() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const data = {
      email: "admin",
      password: "123456"
    }
    adminLogin(data).then(res=>{
      localStorage.setItem("token", "Bearer " + res.data.data)
      console.log(localStorage.getItem("token"))
    })
    // Find user login info
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>

        <div className="button-container">
          <input type="submit" value="Add Product" />
        </div>
        <div className="button-container">
          <input type="submit" value="Reset Form" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="top"> Admin >> Product >> Edit</div>
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default FormProduct;
