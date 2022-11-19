import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import http from "../../utils/http";

function FormLog() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {};

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

export default FormLog;
