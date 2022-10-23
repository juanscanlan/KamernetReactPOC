import React from "react";

// To save time, I just imported the css without using css modules.
import "./authWrapper.css";

import Login from "../../Auth/Login/Login";
import Register from "../../Auth/Register/Register";

const AuthWrapper = ({ successfulLoginHandler, successfulRegisterHandler }) => {
  const loginJSX = (
    <div id="modal-auth-login" className="modal auth-login">
      <div className="modal-background"></div>
      <Login successfulLoginHandler={successfulLoginHandler} />
    </div>
  );

  const RegisterJSX = (
    <div id="modal-auth-register" className="modal auth-register">
      <div className="modal-background"></div>
      {/* @Html.Partial("~/Views/Redesign/Components/Auth/_Register.cshtml",
      registerModel) */}
      <Register successfulRegisterHandler={successfulRegisterHandler} />
    </div>
  );

  const facebookJSX = (
    <div className="modal auth-facebook-email" id="modal-auth-facebook-email">
      <div className="modal-background"></div>
      @Html.Partial("~/Views/Redesign/Components/Auth/_FacebookNoEmailPopup.cshtml",
      fbEmailModel)
    </div>
  );

  return (
    <div>
      {loginJSX}
      {RegisterJSX}
      {facebookJSX}
    </div>
  );
};

export default AuthWrapper;
