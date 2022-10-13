import React from "react";

const Register = () => {
  const fbLogin = () => {
    //Todo
    console.log("fbLogin potato");
  };

  const loginGoogle = (instance) => {
    //Todo
    console.log(instance, "potato");
  };

  const slideRegForm = (number) => {
    //Todo
    console.log(number, "potato");
  };

  const registerJSX = (
    <div class="card color-background border-radius--xs" id="register-card">
      {/* @Html.HiddenFor(m => m.RememberMe)
@Html.HiddenFor(m => m.RegisterReturnUrl)
@Html.HiddenFor(m => m.LastName)
@Html.HiddenFor(m => m.FbEmailAddress)
@Html.HiddenFor(m => m.JavascriptCallback)
@Html.HiddenFor(m => m.Source) */}
      <div class="section-title register-title">
        <span>@Translator.TranslateText("LBL_REGISTER_POPUP_TITLE")</span>
      </div>
      <div id="register-form" class="clearfix">
        {/* @* RegisterFormStep1 *@ */}
        <div id="rfs1">
          <div class="section-subtitle spacer-v--s">
            {/* @switch (Model.Source)
            {
                case LoginRegisterSourceEnum.DisplayTenant:
                    <div class="strong marketing-title">
                        <span>@Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_PROFILES")</span>
                    </div>
                    break;

                case LoginRegisterSourceEnum.SetFavorite:
                    <div id="rdMarketingTitleRoomType" class="strong marketing-title">
                        <span>@Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_FAVORITE")</span>
                    </div>
                    break;

                case LoginRegisterSourceEnum.CreateAlert:
                    <div class="strong marketing-title">
                        @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_ALERT")
                    </div>
                    break;

                case LoginRegisterSourceEnum.ReactToRoomAdvert:
                    <div class="strong marketing-title">
                        @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_REACT")
                    </div>
                    break;

                case LoginRegisterSourceEnum.ReportAbuse:
                    <div class="strong marketing-title">
                        @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_REPORTABUSE")
                    </div>
                    break;
                case LoginRegisterSourceEnum.PageAccessRequiresLogin:
                    <div class="strong marketing-title">
                        @Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_ACCESS")
                    </div>
                    break;
                default:
                    <div class="strong marketing-title">
                        <span>@Translator.TranslateText("LBL_REGISTER_POPUP_MARKETING_DEFAULT")</span>
                    </div>
                    break;
            } */}
          </div>
          <div class="spacer-v--s">
            <a
              class="link-subtle underline color-text-primary"
              id="to-login-link"
              data-modal-id="#modal-auth-login"
            >
              @Translator.TranslateText("LBL_REGISTER_POPUP_SWITCH_TO_LOGIN")
            </a>
          </div>
          <div class="spacer-v--s">
            <button
              type="button"
              id="btnRegisterFacebook_popup"
              class="btn-medium full-width color-text-light"
              onClick={fbLogin}
            >
              <img
                src="@StaticResourcesHelper.GetImageUrl('/content/images/facebook-3-48.png')"
                alt="Facebook"
                width="24"
                height="24"
              />
              @Translator.TranslateText("LBL_REGISTER_POPUP_FB_SIGNUP") Facebook
            </button>
          </div>
          <div class="spacer-v--s">
            <button
              type="button"
              id="btnRegisterGoogle_popup"
              class="btn-medium full-width color-background color-text-secondary"
              onClick={() =>
                loginGoogle("@SettingsManager.Instance.GoogleApiWebClientId")
              }
            >
              <img
                src="@StaticResourcesHelper.GetImageUrl('/content/images/google_icon.jpg')"
                alt="Google"
                width="24"
                height="24"
              />
              @Translator.TranslateText("LBL_REGISTER_POPUP_FB_SIGNUP") Google
            </button>
          </div>
          <div class="spacer-v--s text-center">
            @Translator.TranslateText("LBL_OR")
          </div>

          <div class="spacer-v--s">
            <button
              type="button"
              id="btnRegisterEmail_popup"
              class="btn-medium full-width color-text-light"
              onClick={() => slideRegForm(1)}
            >
              @Translator.TranslateText("LBL_REGISTER_POPUP_EMAIL_SIGNUP")
            </button>
          </div>
        </div>

        {/* @* RegisterFormStep2 *@ */}
        <div id="rfs2" class="hide">
          <div class="input-fields spacer-v--sm">
            <div class="input-field" id="input">
              {/* @Html.TextBoxFor(m => m.FirstName, new { @autocomplete = "name", @class = "full-width", @placeholder = Translator.TranslateText("LBL_REGISTER_FIRSTNAME") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.FirstName).ToHtmlString())) */}
            </div>
            <div class="input-field spacer-v--s">
              {/* @Html.TextBoxFor(m => m.RegisterUserEmail, new { @autocomplete = "email", @class = "full-width", @type = "email", @placeholder = Translator.TranslateText("LBL_REGISTER_EMAIL") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.RegisterUserEmail).ToHtmlString())) */}
            </div>
            <div class="input-field spacer-v--s">
              {/* @Html.PasswordFor(m => m.RegisterPassword, new { @class = "full-width", @placeholder = Translator.TranslateText("LBL_REGISTER_PASSWORD") })
                @Html.Raw(HttpUtility.HtmlDecode(Html.ValidationMessageFor(m => m.RegisterPassword).ToHtmlString())) */}
            </div>{" "}
            <div class="spacer-v--xs">
              <div class="spacer-v--s">
                <input
                  type="checkbox"
                  name="chkStayLoggedIn_Register"
                  id="chkStayLoggedIn_Register"
                  class=""
                />
                <label for="chkStayLoggedIn_Register" class="label">
                  @Translator.TranslateText("LBL_REMEMBER_ME")
                </label>
              </div>
              <div class="spacer-v--s">
                <input
                  type="checkbox"
                  name="ReceiveServiceEmails"
                  id="ReceiveServiceEmails"
                  class=""
                  value="true"
                />
                <label for="ReceiveServiceEmails" class="label">
                  {/* @Html.Raw(String.Format(Translator.TranslateText("LBL_REGISTER_POPUP_RECEIVE_EMAILS"), _emailLink+"\" rel=\"noopener")) */}
                </label>
              </div>
            </div>
            <button
              id="btnRegister_popup"
              type="submit"
              class="btn-medium spacer-v--sm spacer-h--xs color-text-light right box-shadow"
            >
              @Translator.TranslateText("LBL_REGISTER_POPUP_BUTTON_REGISTER")
            </button>
            <button
              type="button"
              id="btnRegisterBack_popup"
              class="btn-medium spacer-v--sm color-background color-text-secondary right box-shadow"
              onClick={() => slideRegForm(0)}
            >
              @Translator.TranslateText("LBL_BACK")
            </button>
          </div>
        </div>
      </div>
      <div class="spacer-v--s text-center" id="terms">
        <div id="terms-title">
          @Translator.TranslateText("LBL_REGISTER_ACCEPT")
          <a
            href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.KamernetConditions, (AppLanguageCode)LocalizationHelper.GetUserLanguage())"
            class="link-subtle underline color-text-primary"
            target="_blank"
          >
            @Translator.TranslateText("LBL_REGISTER_KAMERNET_CONDITIONS")
          </a>
          <span>@Translator.TranslateText("LBL_AND")</span>
          <a
            href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.KamernetPrivacy)"
            class="link-subtle underline color-text-primary"
            target="_blank"
          >
            @Translator.TranslateText("LBL_REGISTER_KAMERNET_PRIVACY")
          </a>
          *
        </div>
      </div>
      <div id="register-img" class="for-desktop-s-up"></div>
    </div>
  );

  return <div>{registerJSX}</div>;
};

export default Register;
