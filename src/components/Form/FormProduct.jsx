import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

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
        <div className="input-container">
          <label>Danh Mục 1 </label>
          <select class="form-select cus1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Danh Mục 2 </label>
          <select class="form-select cus1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Danh Mục 3 </label>
          <select class="form-select cus1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Product Name </label>
          <input type="text" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
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
