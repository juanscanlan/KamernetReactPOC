import React from "react";

import { useState, useEffect } from "react";

import fbIcon from "@assets/Images/SocialMedia/facebook-3-48.png";
import googleIcon from "@assets/Images/SocialMedia/google_icon.jpg";
import { Modal } from "@utilities/Modals/Modals";
import Image from "next/image";

const Login = ({ successfulLoginHandler }) => {
  const [userEmailValue, setUserEmailValue] = useState("");
  const [userPasswordValue, setUserPasswordValue] = useState("");

  const handleEmailChange = (event) => {
    setUserEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPasswordValue(event.target.value);
  };

  const postLogin = (username, password) => {
    fetch(process.env.NEXT_PUBLIC_APP_SERVICES_URL + "/customer/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        useremail: username,
        userpassword: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          Modal.hideAllModals();
          successfulLoginHandler();
        } else {
          alert("wrong credentials");
        }
      })
      .catch(() => alert("wrong credentials"));
  };

  const handleSubmit = (event) => {
    console.log(userEmailValue, userPasswordValue);
    postLogin(userEmailValue, userPasswordValue);
    event.preventDefault();
  };

  const fbLogin = () => {
    //Todo
    console.log("fgLogin potato");
  };

  const loginGoogle = (instance) => {
    //Todo
    console.log(instance, "potato");
  };

  const ShowForgotPasswordPopupNewFramework = () => {
    //Todo
    console.log("ShowForgotPasswordPopupNewFramework potato");
  };

  const loginJSX = (
    <div className="dialog">
      <div className="card color-background border-radius--xs" id="login-card">
        {/* @Html.HiddenFor(m => m.JavascriptCallback)
@Html.HiddenFor(m => m.LoginReturnUrl)
@Html.HiddenFor(m => m.RememberMe)
@Html.HiddenFor(m => m.Source) */}
        <div className="section-title login-title">
          <span>Log in</span>
        </div>
        <div id="login-form" className="clearfix">
          {/* @* loginFormStep1 *@ */}
          <form onSubmit={handleSubmit} id="lfs1">
            <div className="spacer-v--s">
              <a
                className="link-subtle underline color-text-primary"
                id="to-register-link"
                data-modal-id="#modal-auth-register"
              >
                New to Kamernet? Create an account
              </a>
            </div>
            <div className="spacer-v--s">
              <input
                type="checkbox"
                name="chkStayLoggedIn"
                id="chkStayLoggedIn"
                className="full-width"
              />
              <label htmlFor="chkStayLoggedIn" className="label">
                Stay logged in
              </label>
            </div>
            <div className="spacer-v--s">
              <button
                type="button"
                id="btnLoginFacebook_popup"
                className="btn-medium full-width color-text-light"
                onClick={fbLogin}
              >
                <div className="loginIcon">
                  <Image width="24" height="24" src={fbIcon} alt="Facebook" />
                </div>
                Log in with Facebook
              </button>
            </div>
            <div className="spacer-v--s">
              <button
                type="button"
                id="btnLoginGoogle_popup"
                className="btn-medium full-width color-background color-text-secondary"
                onClick={() =>
                  loginGoogle("@SettingsManager.Instance.GoogleApiWebClientId")
                }
              >
                <div className="loginIcon">
                  <Image src={googleIcon} alt="Google" width="24" height="24" />
                </div>
                Log in with Google
              </button>
            </div>
            <div className="text-center text-open-sans small-text">
              Log in via email
            </div>
            <div className="input-field spacer-v--xs">
              {/* @Html.TextBoxFor(m => m.UserEmail, new { @autocomplete = "email", @className = "full-width", @type = "email", @placeholder = Translator.TranslateText("LBL_EMAIL") })
            @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.UserEmail).ToHtmlString())) */}
              {/* Below is an attempt to replicate the c# code above */}
              <input
                autoComplete="email"
                className="full-width"
                data-val="true"
                data-val-required="Email field is required"
                id="UserEmail"
                name="UserEmail"
                placeholder="Email address"
                type="email"
                value={userEmailValue}
                onChange={handleEmailChange}
                tabIndex="1"
              ></input>
              <span
                className="field-validation-valid"
                data-valmsg-for="UserEmail"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="input-field spacer-v--xs">
              {/* @Html.PasswordFor(m => m.LoginPassword, new { @className = "full-width", @placeholder = Translator.TranslateText("LBL_PASSWORD") })
            @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.LoginPassword).ToHtmlString())) */}
              {/* Below is an attempt to replicate the c# code above */}
              <input
                className="full-width"
                data-val="true"
                data-val-required="Password is incorrect"
                id="LoginPassword"
                name="LoginPassword"
                placeholder="Password"
                type="password"
                value={userPasswordValue}
                onChange={handlePasswordChange}
                tabIndex="2"
              ></input>
              <span
                className="field-validation-valid"
                data-valmsg-for="LoginPassword"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="spacer-v--s login-footer">
              <a
                href="#"
                className="left underline pointer color-text-primary small-text"
                onClick={ShowForgotPasswordPopupNewFramework}
              >
                Forgotten password?
              </a>
              <button
                id="btnLogin_popup"
                type="submit"
                className="btn-medium primary right"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
        <div id="login-img" className="for-desktop-s-up"></div>
      </div>
    </div>
  );

  return <>{loginJSX}</>;
};

export default Login;
