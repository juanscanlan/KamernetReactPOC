import React from "react";

// import styles from "./authWrapper.module.scss";

// To save time, I just imported the css without using modules.
import "./authWrapper.css";

import Login from "../../Auth/Login/Login";

const AuthWrapper = () => {
  const loginJSX = (
    <div id="modal-auth-login" className="modal auth-login">
      <div className="modal-background"></div>
      {/* @Html.Partial("~/Views/Redesign/Components/Auth/_Login.cshtml",
      loginModel) */}
      <Login />
    </div>
  );

  const registerJSX = (
    <div id="modal-auth-register" className="modal auth-register">
      <div className="modal-background"></div>
      @Html.Partial("~/Views/Redesign/Components/Auth/_Register.cshtml",
      registerModel)
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
      {registerJSX}
      {facebookJSX}
    </div>
  );
};

export default AuthWrapper;
