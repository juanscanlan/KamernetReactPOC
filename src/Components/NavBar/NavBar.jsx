import React from "react";

import { initTodoList } from "../../Scripts/Components/Header";
import {
  hamburgerListener,
  openSubMenu,
  backToMain,
} from "../../Scripts/Components/Navbar/HamburgerMenu";

import flag from "../../Images/flags/lang/nl.png";

const Navbar = ({onTriggerLoginDialog}) => {
  const isSimpleHeader = false;
  const isUserLoggedIn = false;
  const UserContextHelper = {};
  const checkStudentHouse = true;
  const _verificationPossible = true;
  const SettingsManager = {};
  const iUnrepliedConversationCounter = 0;

  const ProfilePhoto =
    "https://play-lh.googleusercontent.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65";

  const userNotLoggedInFunctions = (_isUserLoggedIn) => {
    if (!_isUserLoggedIn) {
      document
        .getElementById("login-button")
        .addEventListener("click", function () {
          setReturnUrl();
          // sendUserAuthKamernetMPEvent(true);
        });
      document
        .getElementById("login-button-mobile")
        .addEventListener("click", function () {
          setReturnUrl();
        });
      document
        .getElementById("register-button")
        .addEventListener("click", function () {
          setReturnUrl();
          // sendUserAuthKamernetMPEvent(false);
        });
      document
        .getElementById("register-button-mobile")
        .addEventListener("click", function () {
          setReturnUrl();
        });
    }
  };

  //userNotLoggedInFunctions(isUserLoggedIn);

  const KamernetMPLogout = () => {
    console.log("Log out potato");
  };

  const backToMain = () => {
    console.log("Back to main potato");
  };

  const openSubMenu = (_type) => {
    console.log("OpenSubMenu potato");
  };

  function setReturnUrl() {
    fetch('@Url.Action(@"SetCurrentUrlAsReturnUrl", @"Account")', {
      method: "POST",
      body: JSON.stringify({
        returnUrl: window.location.href,
      }),
    });
  }

  hamburgerListener();

  //initTodoList('@Url.Action("mytodolistdropdown", "account")');

  const NavbarJSX = (
    <>
      <nav className="header box-shadow">
        <div className="grid color-text cols-8--m">
          {/* @* *** MOBILE MENU TRIGGER ****@ */}
          <div className="for-tablet-down grid-item col-span-1 spacer-h--s spacer-v--xs">
            <div className="burger-wrapper mobile-menu-trigger">
              <div className="burger-icon"></div>
            </div>
          </div>
          {/* @******************************@ */}
          <div
            className={`brand-logo-wrapper ${isSimpleHeader ? "full-width" : ""
              }`}
          >
            <a
              id="brand-logo"
              href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Home)"
              className="grid-item align-center-all logo color-background-secondary col-span-3--m col-span-1--s"
            >
              logo
            </a>
          </div>

          {!isSimpleHeader ? (
            <>
              <a
                href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)"
                className="dark-white-hover for-desktop-s-up grid-item col-span-3 align-center-all link-subtle col-span-2--xl"
                id="header-search"
              >
                <i className="icon-m search color-background-secondary-light-1"></i>
                Search for a room
              </a>
              <a
                href="@_createAdvertUrl"
                className={`for-desktop-s-up grid-item col-span-3 align-center-all ${isUserLoggedIn ? "col-start-5" : "col-start-6"
                  }`}
                id="header-place-button"
              >
                <span
                  className="btn-medium header accent-dark"
                  aria-disabled="true"
                >
                  Rent your place for free
                </span>
              </a>
              {isUserLoggedIn ? (
                <>
                  <a
                    href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAdverts)"
                    className={`dark-white-hover for-desktop-up grid-item col-span-2 align-center-all link-subtle ${isUserLoggedIn ? "col-start-6" : "col-start-7"
                      }`}
                    id="header-my-adverts"
                  >
                    My adverts
                  </a>
                  <a
                    href="@_messageUrl"
                    data-tooltip="@Translator.TranslateText('LBL_MENU_BAR_TT_MESSAGES')"
                    className="tooltipped dark-white-hover for-desktop-s-up grid-item align-center-all"
                    id="header-messages"
                  >
                    <i className="icon-header header-mail color-background-secondary"></i>
                    {/* @Html.Action("GetUnreadConversationsCount", "Home", new{" "}
                    {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                  </a>
                  <a
                    data-tooltip="@Translator.TranslateText('LBL_GLOBAL_FAVORITES')"
                    className="tooltipped dark-white-hover for-desktop-s-up grid-item align-center-all"
                    id="header-favorites"
                    href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyFavorites)"
                  >
                    <i className="icon-header header-favorite color-background-secondary"></i>
                  </a>
                  <a
                    data-tooltip="@Translator.TranslateText('LBL_MY_TODO_LIST_MENU')"
                    className="tooltipped dark-white-hover for-desktop-s-up grid-item align-center-all"
                    id="header-todo"
                    href="#!"
                  >
                    {/* @Html.Action("GetToDoTasksCount", "Account", new{" "}
                    {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                    <i className="icon-header header-check color-background-secondary"></i>
                  </a>
                </>
              ) : (
                <>
                  <div
                    className="for-desktop-s-up grid-item align-center-all pointer"
                    data-modal-id="#modal-auth-login"
                    id="login-button"
                    onClick={onTriggerLoginDialog}
                  >
                    Log in
                  </div>
                  <div
                    className="for-desktop-s-up grid-item col-span-2 align-center-all pointer"
                    data-modal-id="#modal-auth-register"
                    id="register-button"
                  >
                    Create account
                  </div>
                </>
              )}
            </>
          ) : null}

          {UserContextHelper.CurrentUser != null &&
            UserContextHelper.CurrentUser.IsAuthenticated ? (
            <div
              className="for-desktop-s-up grid-item col-start-11 align-center-all col-start-7--m col-start-3--s "
              id="user-image"
            >
              <img
                className="border-radius--s border-radius--no-bl"
                src={ProfilePhoto}
                width="48"
                height="48"
                alt="Your profile"
              />
            </div>
          ) : null}

          <div
            className="for-desktop-s-up grid-item col-start-8--m col-start-12 align-center-all col-start-4--s floating-menu-trigger pointer"
            id="burger"
          >
            {/* @* *** DESKTOP TRIGGER & FLOATING MENU ****@ */}
            <div className="for-desktop-s-up burger-wrapper">
              <div className="burger-icon"></div>
              <div className="floating-header-menu" style={{ display: "none" }}>
                <ul>
                  {UserContextHelper.CurrentUser != null &&
                    UserContextHelper.CurrentUser.IsAuthenticated ? (
                    <>
                      <li id="menu_desk_profile">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MySearchProfile)">
                          My profile
                        </a>
                      </li>
                      {/* // @*<li id="menu_desk_messages"><a href="@_messageUrl">@Translator.TranslateText("LBL_GLOBAL_MESSAGES")</a></li>*@
                            // @*<li id="menu_desk_favorites"><a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyFavorites)">@Translator.TranslateText("LBL_GLOBAL_FAVORITES")</a></li>*@ */}
                      <li id="menu_desk_adverts">
                        <a href="@_myAdvertsUrl">My adverts</a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </div>
                        </div>
                      </li>

                      <li id="menu_desk_roomsearch">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)">
                          Searching for a room
                        </a>
                      </li>
                      <li id="menu_desk_tenantsearch">
                        <a href="@NavigationHelper.GetSearchTenantsRouteUrl(_searchOptions)?browseTenantSearch=1">
                          Searching for a tenant
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i className="fa fa-home" aria-hidden="true"></i>
                          </div>
                        </div>
                      </li>

                      {checkStudentHouse ? (
                        <li id="menu_desk_studenthouse">
                          <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.StudentHouse)">
                            Student House
                          </a>
                        </li>
                      ) : (
                        <li id="menu_desk_studenthouse">
                          <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.StudentHouseInfo)">
                            Student House
                          </a>
                        </li>
                      )}
                      <li id="menu_desk_cashback">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.CashBack)">
                          Cashback & discounts
                        </a>
                      </li>

                      <li id="menu_desk_smartstudent">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.SmartStudentDeals)">
                          Rent your appliances
                        </a>
                      </li>

                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                          </div>
                        </div>
                      </li>

                      <li id="menu_desk_account">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAccount)">
                          My account
                        </a>
                      </li>
                      <li id="menu_desk_settings">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MySettings)">
                          Settings
                        </a>
                      </li>
                      <li id="menu_desk_language">
                        <a
                          href="@NavigationHelper.GetChangeLanguageUrl(languageId)"
                          id="languageIdDesktop"
                          rel="nofollow"
                        >
                          @_langLabel{" "}
                          <img
                            className="icon-s flagImg"
                            src={flag}
                            width="12"
                            height="12"
                            alt="Flag"
                          />
                        </a>
                      </li>

                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i
                              className="fa fa-question-circle"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </li>

                      <li id="menu_desk_howitwors">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.HowDoesItWork, new RouteValueDictionary(new { @variant = '' }))">
                          How does it work?
                        </a>
                      </li>
                      <li id="menu_desk_aboutus">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.AboutUs)">
                          About Kamernet
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </li>
                      <li id="menu_desk_rentok">
                        <a href="@_safetyPageUrl">Safety</a>
                      </li>
                      <li id="menu_desk_usefultips">
                        <a href="@NavigationHelper.GetAbsoluteUrl(_usefultipsLink)">
                          Useful tips
                        </a>
                      </li>
                      <li id="menu_desk_support">
                        <a href="@_supportLink" target="_blank" rel="noopener">
                          Support
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <div className="divider-icon">
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </li>

                      <li id="menu_desk_logout">
                        <a
                          onClick={KamernetMPLogout}
                          href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Logout)"
                        >
                          Log out
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="for-mobile-only"
                        data-modal-id="#modal-auth-login"
                        id="login-button-mobile"
                      >
                        <a href="#!">Log in</a>
                      </li>
                      <li
                        className="for-mobile-only"
                        data-modal-id="#modal-auth-register"
                        id="register-button-mobile"
                      >
                        <a href="#!">Create account</a>
                      </li>
                      <li className="desktop-menu-divider for-mobile-only">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <i
                            className="icon-s search color-background-secondary"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </li>
                      <li id="menu_desk_roomsearch_loggedout">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)">
                          Searching for a room
                        </a>
                      </li>
                      <li id="menu_desk_tenantsearch_loggedout">
                        <a href="@NavigationHelper.GetSearchTenantsRouteUrl(new SearchOptions() { SearchIn = SearchInTypeEnum.Tenants })">
                          Searching for a tenant
                        </a>
                      </li>

                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <i
                            className="icon-s home color-background-secondary"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </li>
                      <li id="menu_desk_createadvert_loggedout">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.CreateRoomAdvertOrCompleteDraft)">
                          Place advert
                        </a>
                      </li>
                      <li id="menu_desk_studenthouse">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.StudentHouseInfo)">
                          Student House
                        </a>
                      </li>
                      <li id="menu_desk_smartstudent">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.SmartStudentDeals)">
                          Rent your appliances
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <i className="icon-s chevron-right-thin color-background-secondary"></i>
                        </div>
                      </li>
                      <li id="menu_desk_language_loggedout">
                        <a
                          href="@NavigationHelper.GetChangeLanguageUrl(languageId)"
                          id="languageIdDesktop"
                          rel="nofollow"
                        >
                          @_langLabel{" "}
                          <img
                            className="icon-s flagImg"
                            src={flag}
                            width="12"
                            height="12"
                            alt="Flag"
                          />
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <i className="icon-s overlay-question"></i>
                        </div>
                      </li>
                      <li id="menu_desk_howitwors_loggedout">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.HowDoesItWork, new RouteValueDictionary(new { @variant = '' }))">
                          How does it work?
                        </a>
                      </li>
                      <li id="menu_desk_aboutus_loggedout">
                        <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.AboutUs)">
                          About Kamernet
                        </a>
                      </li>
                      <li className="desktop-menu-divider">
                        <div className="divider-wrapper">
                          <div className="divider"></div>
                          <i className="icon-s overlay-question"></i>
                        </div>
                      </li>
                      <li id="menu_desk_safety_loggedout">
                        <a href="@_safetyPageUrl">Safety</a>
                      </li>
                      <li id="menu_desk_usefultips_loggedout">
                        <a href="@NavigationHelper.GetAbsoluteUrl(_usefultipsLink)">
                          Useful tips
                        </a>
                      </li>
                      <li id="menu_desk_support_loggedout">
                        <a href="@_supportLink" target="_blank" rel="noopener">
                          Support
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <i id="header-chevron-down"></i>
          </div>
        </div>
      </nav>
      {/* @* *** MOBILE MENU ****@ */}
      <nav id="mobile-menu" className="for-tablet-down">
        <div className="grid padding-h--sm spacer-v--sm">
          {isUserLoggedIn ? (
            <>
              <div className="grid-item">
                <div className="profile-wrapper">
                  <a
                    href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAccount)"
                    className="mobile-menu-user"
                  >
                    <img
                      src="@ProfilePhoto"
                      alt="Your profile"
                      width="48"
                      height="48"
                    />
                  </a>
                </div>
              </div>

              <div className="grid-item col-span-3 col-span-9--m">
                <div>
                  <div className="mobile-menu-username">
                    @UserContextHelper.CurrentUser.FirstName
                  </div>
                  {_verificationPossible ? (
                    <div
                      className="lazy verification-status-mobile-wrapper"
                      data-loader="ajax"
                      data-src="/Account/VerificationInfo?ismobile=true"
                    >
                      <div className="verification-status-text-mobile">
                        <i className="fa"></i>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
          {/* @* language*@ */}
          <div className="grid-item col-span-4 col-span-12--m">
            <img
              className="lang-flag"
              src="@_flag"
              alt="Language"
              width="24"
              height="24"
            />
            <a
              className="lang"
              href="@NavigationHelper.GetChangeLanguageUrl(languageId)"
              id="languageId"
              rel="nofollow"
            >
              @_langLabel
            </a>
          </div>
          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
        </div>

        {/* @* menu links *@ */}
        <div className="grid padding-h--sm position-relative spacer-v--s--s">
          {!isUserLoggedIn ? (
            <>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul>
                  <li>
                    <a data-modal-id="#modal-auth-login">
                      @Translator.TranslateText("LBL_LOGIN_BUTTON")
                    </a>
                  </li>
                  <li>
                    <a data-modal-id="#modal-auth-register">
                      @Translator.TranslateText("LBL_BUTTON_REGISTER")
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
            </>
          ) : null}

          <div className="grid-item col-span-4 col-span-12--m">
            <ul className="menu-first">
              <li className="submenu-item-selector">
                <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.CreateRoomAdvertOrCompleteDraft)">
                  <i className="icon-m home color-background-secondary"></i>
                  @Translator.TranslateText("LBL_MENU_CREATE_ADVERT")
                </a>
              </li>
              <li>
                <a href="@NavigationHelper.GetSearchRouteUrl(new SearchOptions() { })">
                  <i className="icon-m search color-background-secondary"></i>
                  @Translator.TranslateText("LBL_SEARCH_ROOMS_MENU")
                </a>
              </li>
              <li>
                <a href="@NavigationHelper.GetSearchTenantsRouteUrl(new SearchOptions() { SearchIn = SearchInTypeEnum.Tenants })">
                  <i className="icon-m search color-background-secondary"></i>
                  @Translator.TranslateText("LBL_SEARCH_TENANTS_MENU")
                </a>
              </li>

              {!UserContextHelper?.CurrentUser?.HasActivePremiumMembership &&
                isUserLoggedIn ? (
                <li>
                  <a href="@NavigationHelper.GetPremiumAccountPaymentUrl(userCanBuyLandlordPremium: UserContextHelper.CurrentUser.UserCanBuyLandlordPremium)">
                    @Translator.TranslateText("LBL_GLOBAL_GET_PREMIUM")
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>

          {isUserLoggedIn ? (
            <>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul className="menu-first">
                  <li>
                    <a href="@_dashboardUrl">
                      @Translator.TranslateText("LBL_MENU_DASHBOARD")
                    </a>
                  </li>
                  <li
                    data-attr="submenu-messages"
                    className="submenu-item-selector"
                    onClick={() => openSubMenu("submenu-messages")}
                  >
                    <a>@Translator.TranslateText("LBL_GLOBAL_MESSAGES")</a>
                    <span className="badge mobile-message-badge ">
                      {/* @Html.Action("GetUnreadConversationsCount", "Home", new{" "}
                      {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                    </span>
                  </li>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAccount)">
                      @Translator.TranslateText("LBL_MENU_MY_ACCOUNT")
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul className="menu-first">
                  <li
                    data-attr="submenu-properties"
                    className="submenu-item-selector"
                    onClick={() => openSubMenu("submenu-properties")}
                  >
                    <a href="#!">
                      @Translator.TranslateText("LBL_ADVERTS_MENU")
                    </a>
                  </li>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MySearchProfile)">
                      @Translator.TranslateText("LBL_GLOBAL_PUBLIC_PROFILE")
                    </a>
                  </li>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAlerts)">
                      @Translator.TranslateText("LBL_GLOBAL_ALERTS")
                    </a>
                  </li>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyFavorites)">
                      @Translator.TranslateText("LBL_GLOBAL_FAVORITES")
                    </a>
                  </li>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MySettings)">
                      @Translator.TranslateText("LBL_GLOBAL_SETTINGS")
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
            </>
          ) : null}

          <div className="grid-item col-span-4 col-span-12--m">
            <ul className="menu-first">
              {checkStudentHouse ? (
                <li>
                  <a
                    href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.StudentHouse)"
                    className="white-text"
                  >
                    @Translator.TranslateText("LBL_GLOBAL_STUDENT_HOUSE")
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.StudentHouseInfo)"
                    className="white-text"
                  >
                    @Translator.TranslateText("LBL_GLOBAL_STUDENT_HOUSE")
                  </a>
                </li>
              )}

              {UserContextHelper?.CurrentUser?.IsAuthenticated ? (
                <li className="mytodolist-menubar-mobile">
                  <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyToDoList)">
                    @Translator.TranslateText("LBL_MY_TODO_LIST_MENU")
                    <span className="badge mobile-message-badge ">
                      {/* @Html.Action("GetToDoTasksCount", "Account", new{" "}
                      {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                    </span>
                  </a>
                </li>
              ) : null}

              {SettingsManager?.Instance?.ReferFriendProgramEnabled &&
                isUserLoggedIn ? (
                <li>
                  <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyReferral)">
                    @Translator.TranslateText("LBL_GLOBAL_REFERRAL")
                  </a>
                </li>
              ) : null}

              <li className="cashback-mobile">
                <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.CashBack)">
                  @Translator.TranslateText("LBL_GLOBAL_CASHBACK")
                </a>
              </li>
              <li className="smartstudent-mobile">
                <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.SmartStudentDeals)">
                  @Translator.TranslateText("LBL_GLOBAL_RENTSMARTSTUDENTS")
                </a>
              </li>
            </ul>
          </div>

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.HowDoesItWork, new RouteValueDictionary(new { @variant = '' }))">
                  @Translator.TranslateText("LBL_HOW_DOES_IT_WORK_MENU")
                </a>
              </li>
              <li>
                <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.AboutUs)">
                  @Translator.TranslateText("LBL_MENU_ABOUT_KAMERNET")
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>

          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href="@NavigationHelper.GetAbsoluteUrl(_usefultipsLink)">
                  @Translator.TranslateText("LBL_USEFUL_TIPS_MENU")
                </a>
              </li>
              <li>
                <a href="@_supportLink" target="_blank" rel="noopener">
                  @Translator.TranslateText("LBL_SUPPORT")
                </a>
              </li>
            </ul>
          </div>

          {isUserLoggedIn ? (
            <>
              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul>
                  <li>
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Logout)">
                      @Translator.TranslateText("LBL_LOGOUT_MENU")
                    </a>
                  </li>
                </ul>
              </div>

              {/* @* SUBMENU *@ */}
              <ul className="col-span-4 submenu-mobile-wrapper submenu-messages translate-off-canvas-right col-span-12--m">
                <li className="mainmenu-item-selector" onClick={backToMain}>
                  <a href="#!">Back to main menu</a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.All ? _currentQueryString : itemsPerpage;} */}
                <li className="tab all-messages spacer-v--m collection-item sub-item @if (Model.CurrentMessageType == MessagesType.All) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetAllMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.All, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_ALL_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unreplied ? _currentQueryString : itemsPerpage;} */}
                <li className="tab unreplied-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unreplied) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnrepliedMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.Unreplied, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_UNREPLIED_CONVERSATIONS")
                    {iUnrepliedConversationCounter > 0 ? (
                      <span className="unrepliedConversationClass">
                        @iUnrepliedConversationCounter
                      </span>
                    ) : null}
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Favorites ? _currentQueryString : itemsPerpage;} */}
                <li className="tab favorite-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Favorites) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetFavoritesMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.Favorite, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_FAVORITE_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.NotFavorites ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab notfavorite-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.NotFavorites) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetNotFavoritesMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.NotFavorite, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_NOTFAVORITE_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.ActiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab activeadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.ActiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetActiveAdvertsMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.ActiveAdverts, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_PER_ADVERT_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.InactiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab inactiveadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.InactiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetInactiveAdvertsMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.InactiveAdverts, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_INACTIVE_ADVERTS_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Read ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab read-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Read) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetReadMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.Read, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_READ_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unread ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab unread-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unread) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnreadMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.Unread, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_UNREAD_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Trash ? _currentQueryString : itemsPerpage;} */}
                <li className="tab trash-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Trash) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetTrashMessages', 'Messages') + queryString)"
                    href="@NavigationHelper.GetMyMessagesFilterUrl(MyMessagesActionsDropdown.Trash, 20)"
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_TRASH_MESSAGES")
                  </a>
                </li>

                <li className="tab custom-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Custom) {<text> my-messages-menuitem-selected selection selected</text>}">
                  <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyMessagesCustom)">
                    @Translator.TranslateText("LBL_MY_MESSAGES_CUSTOM_MESSAGES")
                  </a>
                </li>
              </ul>

              <ul className="col-span-4 submenu-mobile-wrapper submenu-properties translate-off-canvas-right col-span-12--m">
                <li className="mainmenu-item-selector" onClick={backToMain}>
                  <a href="#!">Back to main menu</a>
                </li>
                <li className="spacer-v--m">
                  <a href="@NavigationHelper.GetMyAdvertsFullRouteUrl(SearchOptions.Default, KamernetRoute.MyAdverts)">
                    @Translator.TranslateText("LBL_ACTIVE_ADVERTS")
                  </a>
                </li>
                <li>
                  <a href="@NavigationHelper.GetMyAdvertsFullRouteUrl(SearchOptions.Default, KamernetRoute.MyAdvertsInactive)">
                    @Translator.TranslateText("LBL_INACTIVE_ADVERTS")
                  </a>
                </li>
                <li>
                  <a href="@NavigationHelper.GetMyAdvertsFullRouteUrl(SearchOptions.Default, KamernetRoute.MyAdvertsDraft)">
                    @Translator.TranslateText("LBL_DRAFT_ADVERTS")
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </nav>
      <div className="my-todo-list color-background for-desktop-s-up"></div>
    </>
  );

  return <>{NavbarJSX}</>;
};

export default Navbar;
