import React from "react";
import { useState } from "react";
import fbIcon from "../../../Images/SocialMedia/facebook-3-48.png";
import googleIcon from "../../../Images/SocialMedia/google_icon.jpg";

import {
  fbLogin,
  loginGoogle,
  slideRegForm,
} from "../../../Scripts/Components/Auth/Auth";
import { Modal } from "../../../Scripts/Components/Modals/Modals";

const apiUrl = "http://localhost:50001/api/customer/register";

const baseUrl = "https://acceptance.kamernet.nl/";

const getFullRoute = (baseUrl, route) => {
  return baseUrl + route;
};

const Register = ({ successfulRegisterHandler }) => {
  const Model = {};

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const RenderSourceSwitch = () => {
    switch (Model.Source) {
      case "LoginRegisterSourceEnum.DisplayTenant":
        <div className="strong marketing-title">
          <span>
            @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_PROFILES")
          </span>
        </div>;
        break;

      case "LoginRegisterSourceEnum.SetFavorite":
        <div id="rdMarketingTitleRoomType" className="strong marketing-title">
          <span>
            @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_FAVORITE")
          </span>
        </div>;
        break;

      case "LoginRegisterSourceEnum.CreateAlert":
        <div className="strong marketing-title">
          @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_ALERT")
        </div>;
        break;

      case "LoginRegisterSourceEnum.ReactToRoomAdvert":
        <div className="strong marketing-title">
          @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_REACT")
        </div>;
        break;

      case "LoginRegisterSourceEnum.ReportAbuse":
        <div className="strong marketing-title">
          @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_REPORTABUSE")
        </div>;
        break;
      case "LoginRegisterSourceEnum.PageAccessRequiresLogin":
        <div className="strong marketing-title">
          @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_ACCESS")
        </div>;
        break;
      default:
        <div className="strong marketing-title">
          <span>
            @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_DEFAULT")
          </span>
        </div>;
        break;
    }
  };

  const handleSubmit = (event) => {
    console.log(firstName, email, password);
    postRegister(firstName, email, password);
    event.preventDefault();
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const fbRegister = () => {
    console.log("fbRegister");
  };

  const googleRegister = () => {
    console.log("googleRegister");
  };

  const postRegister = (firstName, email, password) => {
    fetch(apiUrl, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        UserFirstName: firstName,
        UserEmail: email,
        UserPassword: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          Modal.hideAllModals();
          successfulRegisterHandler();
        } else {
          alert('register failed');
        }
      })
      .catch(() => alert('register failed'));
  };

  const registerJSX = (
    <div className="card color-background border-radius--xs" id="register-card">
      {/* @Html.HiddenFor(m => m.RememberMe)
@Html.HiddenFor(m => m.RegisterReturnUrl)
@Html.HiddenFor(m => m.LastName)
@Html.HiddenFor(m => m.FbEmailAddress)
@Html.HiddenFor(m => m.JavascriptCallback)
@Html.HiddenFor(m => m.Source) */}
      <div className="section-title register-title">
        <span>Create an account</span>
      </div>
      <div id="register-form" className="clearfix">
        {/* @* RegisterFormStep1 *@ */}
        <div id="rfs1">
          <div className="section-subtitle spacer-v--s">
            <RenderSourceSwitch />
          </div>
          <div className="spacer-v--s">
            <a
              className="link-subtle underline color-text-primary"
              id="to-login-link"
              data-modal-id="#modal-auth-login"
            >
              Already have an account? Log in
            </a>
          </div>
          <div className="spacer-v--s">
            <button
              type="button"
              id="btnRegisterFacebook_popup"
              className="btn-medium full-width color-text-light"
              onClick={fbRegister}
            >
              <img src={fbIcon} alt="Facebook" width="24" height="24" />
              Sign up with Facebook
            </button>
          </div>
          <div className="spacer-v--s">
            <button
              type="button"
              id="btnRegisterGoogle_popup"
              className="btn-medium full-width color-background color-text-secondary"
              onClick={() => googleRegister()}
            >
              <img src={googleIcon} alt="Google" width="24" height="24" />
              Sign up with Google
            </button>
          </div>
          <div className="spacer-v--s text-center">or</div>

          <div className="spacer-v--s">
            <button
              type="button"
              id="btnRegisterEmail_popup"
              className="btn-medium full-width color-text-light"
              onClick={() => slideRegForm(1)}
            >
              with e-mail
            </button>
          </div>
        </div>

        {/* @* RegisterFormStep2 *@ */}
        <div id="rfs2" className="hide">
          <form onSubmit={handleSubmit} id="lfs1">
            <div className="input-field spacer-v--xs">
              <input
                autoComplete="firstName"
                className="full-width"
                data-val="true"
                data-val-required="First Name field is required"
                id="FirstName"
                name="FirstName"
                placeholder="First Name"
                type="text"
                value={firstName}
                onChange={firstNameChangeHandler}
                tabIndex="1"
              ></input>
              <span
                className="field-validation-valid"
                data-valmsg-for="FirstName"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="input-field spacer-v--xs">
              <input
                autoComplete="email"
                className="full-width"
                data-val="true"
                data-val-required="Email field is required"
                id="UserEmail"
                name="UserEmail"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={emailChangeHandler}
                tabIndex="1"
              ></input>
              <span
                className="field-validation-valid"
                data-valmsg-for="UserEmail"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="input-field spacer-v--xs">
              <input
                autoComplete="password"
                className="full-width"
                data-val="true"
                data-val-required="Password field is required"
                id="Password"
                name="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={passwordChangeHandler}
                tabIndex="1"
              ></input>
              <span
                className="field-validation-valid"
                data-valmsg-for="Password"
                data-valmsg-replace="true"
              ></span>
            </div>
            <button
              id="btnRegister_popup"
              type="submit"
              className="btn-medium spacer-v--sm spacer-h--xs color-text-light right box-shadow"
            >
              Sign Up
            </button>

            <button
              type="button"
              id="btnRegisterBack_popup"
              className="btn-medium spacer-v--sm color-background color-text-secondary right box-shadow"
              onClick={() => slideRegForm(0)}
            >
              Back
            </button>
          </form>
        </div>
      </div>
      <div className="spacer-v--s text-center" id="terms">
        <div id="terms-title">
          By creating an account you accept the
          <a
            href={getFullRoute(baseUrl, "en/terms-conditions")}
            className="link-subtle underline color-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            terms and conditions
          </a>
          <span>and</span>
          <a
            href={getFullRoute(baseUrl, "en/privacypolicy")}
            className="link-subtle underline color-text-primary"
            target="_blank"
            rel="noreferrer"
          >
            privacy statement
          </a>
          *
        </div>
      </div>
      <div id="register-img" className="for-desktop-s-up"></div>
    </div>
  );

  return <div>{registerJSX}</div>;
};

export default Register;
