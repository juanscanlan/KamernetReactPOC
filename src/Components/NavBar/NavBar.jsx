import React from "react";

import { initTodoList } from "../../Scripts/Components/Header";
import {
  hamburgerListener,
  openSubMenu,
  backToMain,
} from "../../Scripts/Components/Navbar/HamburgerMenu";

import flag from "../../Images/flags/lang/nl.png";
import { get } from "jquery";
import { useEffect } from "react";

const baseUrl = "https://acceptance.kamernet.nl/";

const getFullRoute = (baseUrl, route) => {
  return baseUrl + route;
};

const Navbar = ({ isUserLoggedIn }) => {
  const isSimpleHeader = false;
  const UserContextHelper = {};
  const checkStudentHouse = true;
  const _verificationPossible = true;
  const SettingsManager = {};
  const iUnrepliedConversationCounter = 0;

  const createAdvertUrl = isUserLoggedIn
    ? "https://acceptance.kamernet.nl/en/create-room-advert"
    : "https://acceptance.kamernet.nl/en/rent-out-room";

  const ProfilePhoto =
    "https://play-lh.googleusercontent.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65";


  const KamernetMPLogout = () => {
    console.log("Log out potato");
  };

  const backToMain = () => {
    console.log("Back to main potato");
  };

  const openSubMenu = (_type) => {
    console.log("OpenSubMenu potato");
  };

  useEffect(() => {
    // set up the listener only once
    hamburgerListener();
  }, []);

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
              href="https://acceptance.kamernet.nl/"
              className="grid-item align-center-all logo color-background-secondary col-span-3--m col-span-1--s"
            >
              logo
            </a>
          </div>

          {!isSimpleHeader ? (
            <>
              <a
                href="https://acceptance.kamernet.nl/en/search"
                className="dark-white-hover for-desktop-s-up grid-item col-span-3 align-center-all link-subtle col-span-2--xl"
                id="header-search"
              >
                <i className="icon-m search color-background-secondary-light-1"></i>
                Search for a room
              </a>
              <a
                href={createAdvertUrl}
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
                    href="https://acceptance.kamernet.nl/en/my-adverts"
                    className={`dark-white-hover for-desktop-up grid-item col-span-2 align-center-all link-subtle ${isUserLoggedIn ? "col-start-6" : "col-start-7"
                      }`}
                    id="header-my-adverts"
                  >
                    My adverts
                  </a>
                  <a
                    href="https://acceptance.kamernet.nl/en/my-messages/default?itemsperpage=20&amp;pageno=1"
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
                    href={getFullRoute(baseUrl, "en/my-favorites/rooms")}
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

          {isUserLoggedIn ? (
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
                  { isUserLoggedIn ? (
                    <>
                      <li id="menu_desk_profile">
                        <a href={getFullRoute(baseUrl, "en/public-profile")}>
                          My profile
                        </a>
                      </li>
                      <li id="menu_desk_adverts">
                        <a href={getFullRoute(baseUrl, "en/my-adverts")}>
                          My adverts
                        </a>
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
                        <a href={getFullRoute(baseUrl, "en/search")}>
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
                          <a href={getFullRoute(baseUrl, "en/studenthouse")}>
                            Student House
                          </a>
                        </li>
                      ) : (
                        <li id="menu_desk_studenthouse">
                          <a
                            href={getFullRoute(
                              baseUrl,
                              "en/student-house/find-your-new-roommate"
                            )}
                          >
                            Student House
                          </a>
                        </li>
                      )}
                      <li id="menu_desk_cashback">
                        <a href={getFullRoute(baseUrl, "en/cashback")}>
                          Cashback & discounts
                        </a>
                      </li>

                      <li id="menu_desk_smartstudent">
                        <a
                          href={getFullRoute(baseUrl, "en/for-rent/appliances")}
                        >
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
                        <a href={getFullRoute(baseUrl, "en/my-account")}>
                          My account
                        </a>
                      </li>
                      <li id="menu_desk_settings">
                        <a href={getFullRoute(baseUrl, "en/account/settings")}>
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
                        <a href={getFullRoute(baseUrl, "en/how-does-it-work")}>
                          How does it work?
                        </a>
                      </li>
                      <li id="menu_desk_aboutus">
                        <a href={getFullRoute(baseUrl, "en/about-us")}>
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
                        <a href={getFullRoute(baseUrl, "en/safety-tenant")}>
                          Safety
                        </a>
                      </li>
                      <li id="menu_desk_usefultips">
                        <a href={getFullRoute(baseUrl, "tips/studenten")}>
                          Useful tips
                        </a>
                      </li>
                      <li id="menu_desk_support">
                        <a
                          href="https://support.kamernet.nl/en"
                          target="_blank"
                          rel="noreferrer"
                        >
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
                          href={getFullRoute(baseUrl, "en/logout")}
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
                        <a href={getFullRoute(baseUrl, "en/search")}>
                          Searching for a room
                        </a>
                      </li>
                      <li id="menu_desk_tenantsearch_loggedout">
                        <a
                          href={getFullRoute(
                            baseUrl,
                            "en/tenants/room-netherlands"
                          )}
                        >
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
                        <a
                          href={getFullRoute(baseUrl, "en/create-room-advert")}
                        >
                          Place advert
                        </a>
                      </li>
                      <li id="menu_desk_studenthouse">
                        <a
                          href={getFullRoute(
                            baseUrl,
                            "en/student-house/find-your-new-roommate"
                          )}
                        >
                          Student House
                        </a>
                      </li>
                      <li id="menu_desk_smartstudent">
                        <a
                          href={getFullRoute(baseUrl, "en/for-rent/appliances")}
                        >
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
                        <a href={getFullRoute(baseUrl, "en/how-does-it-work")}>
                          How does it work?
                        </a>
                      </li>
                      <li id="menu_desk_aboutus_loggedout">
                        <a href={getFullRoute(baseUrl, "en/about-us")}>
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
                        <a href={getFullRoute(baseUrl, "en/safety-landlord")}>
                          Safety
                        </a>
                      </li>
                      <li id="menu_desk_usefultips_loggedout">
                        <a href={getFullRoute(baseUrl, "tips/studenten")}>
                          Useful tips
                        </a>
                      </li>
                      <li id="menu_desk_support_loggedout">
                        <a
                          href="https://support.kamernet.nl/en"
                          target="_blank"
                          rel="noreferrer"
                        >
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
                    href={getFullRoute(baseUrl, "en/my-account")}
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
                <a href={getFullRoute(baseUrl, "en/create-room-advert")}>
                  <i className="icon-m home color-background-secondary"></i>
                  @Translator.TranslateText("LBL_MENU_CREATE_ADVERT")
                </a>
              </li>
              <li>
                <a
                  href={getFullRoute(baseUrl, "en/for-rent/rooms-netherlands")}
                >
                  <i className="icon-m search color-background-secondary"></i>
                  @Translator.TranslateText("LBL_SEARCH_ROOMS_MENU")
                </a>
              </li>
              <li>
                <a href={getFullRoute(baseUrl, "en/tenants/room-netherlands")}>
                  <i className="icon-m search color-background-secondary"></i>
                  @Translator.TranslateText("LBL_SEARCH_TENANTS_MENU")
                </a>
              </li>

              {!UserContextHelper?.CurrentUser?.HasActivePremiumMembership &&
                isUserLoggedIn ? (
                <li>
                  <a href={getFullRoute(baseUrl, "en/premium-account-payment")}>
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
                    <a href={getFullRoute(baseUrl, "en/dashboard")}>
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
                    <a href={getFullRoute(baseUrl, "en/my-account")}>
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
                    <a href={getFullRoute(baseUrl, "en/public-profile")}>
                      @Translator.TranslateText("LBL_GLOBAL_PUBLIC_PROFILE")
                    </a>
                  </li>
                  <li>
                    <a href={getFullRoute(baseUrl, "en/account/alerts")}>
                      @Translator.TranslateText("LBL_GLOBAL_ALERTS")
                    </a>
                  </li>
                  <li>
                    <a href={getFullRoute(baseUrl, "en/my-favorites/rooms")}>
                      @Translator.TranslateText("LBL_GLOBAL_FAVORITES")
                    </a>
                  </li>
                  <li>
                    <a href={getFullRoute(baseUrl, "en/account/settings")}>
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
                    href={getFullRoute(baseUrl, "en/studenthouse")}
                    className="white-text"
                  >
                    @Translator.TranslateText("LBL_GLOBAL_STUDENT_HOUSE")
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href={getFullRoute(
                      baseUrl,
                      "en/student-house/find-your-new-roommate"
                    )}
                    className="white-text"
                  >
                    @Translator.TranslateText("LBL_GLOBAL_STUDENT_HOUSE")
                  </a>
                </li>
              )}

              {isUserLoggedIn ? (
                <li className="mytodolist-menubar-mobile">
                  <a href={getFullRoute(baseUrl, "en/account/to-do")}>
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
                  <a href={getFullRoute(baseUrl, "en/referrals")}>
                    @Translator.TranslateText("LBL_GLOBAL_REFERRAL")
                  </a>
                </li>
              ) : null}

              <li className="cashback-mobile">
                <a href={getFullRoute(baseUrl, "en/cashback")}>
                  @Translator.TranslateText("LBL_GLOBAL_CASHBACK")
                </a>
              </li>
              <li className="smartstudent-mobile">
                <a href={getFullRoute(baseUrl, "en/for-rent/appliances")}>
                  @Translator.TranslateText("LBL_GLOBAL_RENTSMARTSTUDENTS")
                </a>
              </li>
            </ul>
          </div>

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href={getFullRoute(baseUrl, "en/how-does-it-work")}>
                  @Translator.TranslateText("LBL_HOW_DOES_IT_WORK_MENU")
                </a>
              </li>
              <li>
                <a href={getFullRoute(baseUrl, "en/about-us")}>
                  @Translator.TranslateText("LBL_MENU_ABOUT_KAMERNET")
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>

          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href={getFullRoute(baseUrl, "tips/studenten")}>
                  @Translator.TranslateText("LBL_USEFUL_TIPS_MENU")
                </a>
              </li>
              <li>
                <a
                  href="https://support.kamernet.nl/en"
                  target="_blank"
                  rel="noreferrer"
                >
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
                    <a href={getFullRoute(baseUrl, "en/logout")}>
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
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/all?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_ALL_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unreplied ? _currentQueryString : itemsPerpage;} */}
                <li className="tab unreplied-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unreplied) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnrepliedMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/unreplied?itemsperpage=20"
                    )}
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
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/favorite?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_FAVORITE_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.NotFavorites ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab notfavorite-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.NotFavorites) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetNotFavoritesMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/notfavorite?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_NOTFAVORITE_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.ActiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab activeadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.ActiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetActiveAdvertsMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/activeadverts?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_PER_ADVERT_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.InactiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab inactiveadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.InactiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetInactiveAdvertsMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/inactiveadverts?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_INACTIVE_ADVERTS_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Read ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab read-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Read) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetReadMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/read?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_READ_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unread ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab unread-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unread) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnreadMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/unread?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_UNREAD_MESSAGES")
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Trash ? _currentQueryString : itemsPerpage;} */}
                <li className="tab trash-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Trash) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetTrashMessages', 'Messages') + queryString)"
                    href={getFullRoute(
                      baseUrl,
                      "en/my-messages/trash?itemsperpage=20"
                    )}
                  >
                    @Translator.TranslateText("LBL_MY_MESSAGES_TRASH_MESSAGES")
                  </a>
                </li>

                <li className="tab custom-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Custom) {<text> my-messages-menuitem-selected selection selected</text>}">
                  <a href={getFullRoute(baseUrl, "en/my-messages/custom")}>
                    @Translator.TranslateText("LBL_MY_MESSAGES_CUSTOM_MESSAGES")
                  </a>
                </li>
              </ul>

              <ul className="col-span-4 submenu-mobile-wrapper submenu-properties translate-off-canvas-right col-span-12--m">
                <li className="mainmenu-item-selector" onClick={backToMain}>
                  <a href="#!">Back to main menu</a>
                </li>
                <li className="spacer-v--m">
                  <a href={getFullRoute(baseUrl, "en/my-adverts")}>
                    @Translator.TranslateText("LBL_ACTIVE_ADVERTS")
                  </a>
                </li>
                <li>
                  <a href={getFullRoute(baseUrl, "en/my-adverts/inactive")}>
                    @Translator.TranslateText("LBL_INACTIVE_ADVERTS")
                  </a>
                </li>
                <li>
                  <a href={getFullRoute(baseUrl, "en/my-adverts/draft")}>
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
