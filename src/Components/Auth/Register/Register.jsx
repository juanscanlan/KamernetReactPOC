import React from "react";

import fbIcon from "../../../Images/SocialMedia/facebook-3-48.png";
import googleIcon from "../../../Images/SocialMedia/google_icon.jpg";

import {
  fbLogin,
  loginGoogle,
  slideRegForm,
} from "../../../Scripts/Components/Auth/Auth";

const Register = () => {
  const Model = {};

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

  // const fbLogin = () => {
  //   //Todo
  //   console.log("fbLogin potato");
  // };

  // const loginGoogle = (instance) => {
  //   //Todo
  //   console.log(instance, "potato");
  // };

  // const slideRegForm = (number) => {
  //   //Todo
  //   console.log(number, "potato");
  // };

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
              onClick={fbLogin}
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
              onClick={() =>
                loginGoogle("@SettingsManager.Instance.GoogleApiWebClientId")
              }
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
          <div className="input-fields spacer-v--sm">
            <div className="input-field" id="input">
              {/* @Html.TextBoxFor(m => m.FirstName, new { @autocomplete = "name", @className = "full-width", @placeholder = Translator.TranslateText("LBL_REGISTER_FIRSTNAME") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.FirstName).ToHtmlString())) */}
            </div>
            <div className="input-field spacer-v--s">
              {/* @Html.TextBoxFor(m => m.RegisterUserEmail, new { @autocomplete = "email", @className = "full-width", @type = "email", @placeholder = Translator.TranslateText("LBL_REGISTER_EMAIL") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.RegisterUserEmail).ToHtmlString())) */}
            </div>
            <div className="input-field spacer-v--s">
              {/* @Html.PasswordFor(m => m.RegisterPassword, new { @className = "full-width", @placeholder = Translator.TranslateText("LBL_REGISTER_PASSWORD") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.RegisterPassword).ToHtmlString())) */}
            </div>{" "}
            <div className="spacer-v--xs">
              <div className="spacer-v--s">
                <input
                  type="checkbox"
                  name="chkStayLoggedIn_Register"
                  id="chkStayLoggedIn_Register"
                  className=""
                />
                <label htmlFor="chkStayLoggedIn_Register" className="label">
                  Stay logged in
                </label>
              </div>
              <div className="spacer-v--s">
                <input
                  type="checkbox"
                  name="ReceiveServiceEmails"
                  id="ReceiveServiceEmails"
                  className=""
                  value="true"
                />
                <label htmlFor="ReceiveServiceEmails" className="label">
                  {/* @Html.Raw(String.Format(Translator.TranslateText("LBL_REGISTER_POPUP_RECEIVE_EMAILS"), _emailLink+"\" rel=\"noopener")) */}
                </label>
              </div>
            </div>
            <button
              id="btnRegister_popup"
              type="submit"
              className="btn-medium spacer-v--sm spacer-h--xs color-text-light right box-shadow"
            >
              Create account
            </button>
            <button
              type="button"
              id="btnRegisterBack_popup"
              className="btn-medium spacer-v--sm color-background color-text-secondary right box-shadow"
              onClick={() => slideRegForm(0)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="spacer-v--s text-center" id="terms">
        <div id="terms-title">
          By creating an account you accept the
          <a
            href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.KamernetConditions, (AppLanguageCode)LocalizationHelper.GetUserLanguage())"
            className="link-subtle underline color-text-primary"
            target="_blank"
          >
            terms and conditions
          </a>
          <span>and</span>
          <a
            href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.KamernetPrivacy)"
            className="link-subtle underline color-text-primary"
            target="_blank"
          >
            privacy statement
          </a>
          *
        </div>
      </div>
      <div id="register-img" className="for-desktop-s-up"></div>
    </div>
  );
};

export default Register;
