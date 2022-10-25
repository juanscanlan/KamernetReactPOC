import $ from "jquery";
// Copied from kamernet\proj\Qmulus.Kamernet.StaticResources\Scripts\redesign\Components\Auth.js

// Taken from _BaseLayoutSass.cshtml
const a_lbl = {
  reg_err: "Invalid characters",
  btn_reg: "Create account",
  btn_lgn: "Log in",
  stay: true,
  fbId: "@SettingsManager.Instance.FacebookAppId",
  r_uri: "@SettingsManager.Instance.KamernetBaseUrl",
};

export function loginGoogle(client_id) {
  var googleUrl = "https://accounts.google.com/o/oauth2/auth?",
    options = {
      redirect_uri: window.location.origin + "/",
      response_type: "token",
      scope: "email profile openid",
      client_id,
      fetch_basic_profile: true,
      gsiwebsdk: 2,
    },
    authUrl = googleUrl;
  var optionKeys = Object.keys(options);
  optionKeys.forEach(function (option, index) {
    if (optionKeys.length !== index + 1)
      authUrl += option + "=" + options[option] + "&";
  });
  window.location.href = authUrl;
}

export function onRegisterBegin() {
  //setReturnUrl();
  let firstNameField = $("#rfs2").find("input.full-width#FirstName")[0];
  if (
    !firstNameField.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
  ) {
    animateRegisterError(firstNameField.parentNode, a_lbl.reg_err, true);
    setTimeout(function () {
      firstNameField.value = "";
    }, 200);
    return false;
  } else {
    document.getElementById("btnRegister_popup").innerHTML =
      '<i class="icon-s loading rotating color-background"></i>';
  }
}

export function onRegisterSuccess(data) {
  if (data.error) {
    if (data.input.indexOf("#") !== -1) {
      var el = document.getElementById(data.input.replace("#", "")).parentNode;
      animateRegisterError(el, data.error);
    } else if (data.input === "any") {
      window.location.reload();
    } else if (data.input === "empty") {
      var container = document.getElementById("rfs2");
      $(container)
        .find("input.full-width")
        .each(function (i, inputEl) {
          if (inputEl.value === "") {
            animateRegisterError(inputEl.parentNode, data.error);
          } else if (
            inputEl.id === "FirstName" &&
            !inputEl.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
          ) {
            animateRegisterError(el, data.error);
          }
        });
    }
  }
  document.getElementById("btnRegister_popup").innerHTML = a_lbl.btn_reg;
}

export function onLoginBegin() {
  //setReturnUrl();
  document.getElementById("btnLogin_popup").innerHTML =
    '<i class="icon-s loading rotating color-background"></i>';
}
export function onLoginSuccess(data) {
  //MixPanel.SendMixpanelLoginEvent("Email");
  if (data.error) {
    if (data.input.indexOf("#") !== -1) {
      var el = document.getElementById(data.input.replace("#", "")).parentNode;
      animateRegisterError(el, data.error);
    } else if (data.input === "any") {
      window.location.reload();
    } else if (data.input === "empty") {
      var container = document.getElementById("lfs1");
      $(container)
        .find("input.full-width")
        .each(function (i, inputEl) {
          if (inputEl.value === "") {
            animateRegisterError(inputEl.parentNode, data.error);
          }
        });
    }
  }
  document.getElementById("btnLogin_popup").innerHTML = a_lbl.btn_lgn;
}

$(document).ready(function () {
  $("#FirstName").attr("tabindex", 1).focus();
  $("#RegisterUserEmail").attr("tabindex", 2);
  $("#RegisterPassword").attr("tabindex", 3);
  $("#ReceiveServiceEmails label").attr("tabindex", 4);
  $("#btnRegister_popup").attr("tabindex", 5);

  if (
    $("#chkStayLoggedIn_Register #chkStayLoggedIn") !== undefined &&
    a_lbl.stay !== null &&
    a_lbl.stay !== undefined
  ) {
    $("#chkStayLoggedIn_Register #chkStayLoggedIn").prop("checked", a_lbl.stay);
  }

  $("#UserEmail").attr("tabindex", 1).focus();
  $("#LoginPassword").attr("tabindex", 2);
  $("#btnLogin_popup").attr("tabindex", 3);
});

export function slideRegForm() {
  $("#rfs2, #rfs1").toggleClass("hide");
}

export function animateRegisterError(el, errorMessage, wipe) {
  var errorEl = document.createElement("DIV");
  errorEl.classList.add("form-error");
  errorEl.innerHTML = errorMessage;
  el.insertBefore(errorEl, el.firstElementChild);
  errorEl.addEventListener("click", function (e) {
    e.stopPropagation();
    errorEl.remove();
  });
  setTimeout(function () {
    errorEl.classList.add(wipe ? "wipe" : "active");
  }, 100);
  setTimeout(function () {
    errorEl.classList.add("fade-out");
    errorEl.classList.remove("active");
  }, 3000);
  setTimeout(function () {
    errorEl.classList.remove("fade-out");
    errorEl.classList.remove("wipe");
    errorEl.remove();
  }, 4000);
}

export function fbLogin() {
  var redirectUrl = window.location.href;
  window.location.href =
    "https://www.facebook.com/dialog/oauth?client_id=" +
    a_lbl.fbId +
    "&redirect_uri=" +
    a_lbl.r_uri +
    "&response_type=token&scope=email,user_birthday,user_location,user_likes,user_gender&state={redirectUrl:%22" +
    redirectUrl +
    "%22}";
}
