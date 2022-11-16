import React, { useState } from "react";

import { initTodoList } from "@utilities/Header/Header";

import flag from "@assets/Images/flags/lang/nl.png";
import ProfilePhoto from "@assets/Images/marketing/marketing_home_default_sh.jpg";

import { useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@core/Auth/AuthContext";

const getMvcUrl = (path) => {
  return process.env.NEXT_PUBLIC_MVC_APP_BASE_URL + path;
};

const Navbar = () => {
  const isSimpleHeader = false;
  const UserContextHelper = {};
  const checkStudentHouse = true;
  const _verificationPossible = true;
  const SettingsManager = {};
  const iUnrepliedConversationCounter = 0;
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showBurger, setShowBurger] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const createAdvertUrl = isLoggedIn
    ? getMvcUrl("en/create-room-advert")
    : getMvcUrl("en/rent-out-room");

  const backToMain = () => {
    console.log("Back to main potato");
  };

  const openSubMenu = (_type) => {
    console.log("OpenSubMenu potato");
  };

  useEffect(() => { }, []);

  const handleBurgerClick = () => {
    setShowBurger((currentState) => !currentState);
  };

  const handleMobileNavClick = () => {
    setShowMobileNav((currentState) => !currentState);
  };

  const BurgerJSX = () => {
    return (
      <div className="floating-header-menu">
        <ul>
          {isLoggedIn ? (
            <>
              <li id="menu_desk_profile">
                <a href={getMvcUrl("en/public-profile")}>
                  My profile
                </a>
              </li>
              <li id="menu_desk_adverts">
                <a href={getMvcUrl("en/my-adverts")}>My adverts</a>
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
                <a href={getMvcUrl("en/search")}>
                  Searching for a room
                </a>
              </li>
              <li id="menu_desk_tenantsearch">
                <a href={getMvcUrl("en/tenants/room-netherlands?browseTenantSearch=1")}>
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
                  <a href={getMvcUrl("en/studenthouse")}>
                    Student House
                  </a>
                </li>
              ) : (
                <li id="menu_desk_studenthouse">
                  <a
                    href={getMvcUrl(
                      "en/student-house/find-your-new-roommate"
                    )}
                  >
                    Student House
                  </a>
                </li>
              )}
              <li id="menu_desk_cashback">
                <a href={getMvcUrl("en/cashback")}>
                  Cashback & discounts
                </a>
              </li>

              <li id="menu_desk_smartstudent">
                <a href={getMvcUrl("en/for-rent/appliances")}>
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
                <a href={getMvcUrl("en/my-account")}>My account</a>
              </li>
              <li id="menu_desk_settings">
                <a href={getMvcUrl("en/account/settings")}>
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
                  <Image
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
                    <i className="fa fa-question-circle" aria-hidden="true"></i>
                  </div>
                </div>
              </li>

              <li id="menu_desk_howitwors">
                <a href={getMvcUrl("en/how-does-it-work")}>
                  How does it work?
                </a>
              </li>
              <li id="menu_desk_aboutus">
                <a href={getMvcUrl("en/about-us")}>
                  About Kamernet
                </a>
              </li>
              <li className="desktop-menu-divider">
                <div className="divider-wrapper">
                  <div className="divider"></div>
                  <div className="divider-icon">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </div>
                </div>
              </li>
              <li id="menu_desk_rentok">
                <a href={getMvcUrl("en/safety-tenant")}>Safety</a>
              </li>
              <li id="menu_desk_usefultips">
                <a href={getMvcUrl("tips/studenten")}>
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
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </div>
                </div>
              </li>

              <li onClick={logout} id="menu_desk_logout">
                <div>Log out</div>
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
                <a href={getMvcUrl("en/search")}>
                  Searching for a room
                </a>
              </li>
              <li id="menu_desk_tenantsearch_loggedout">
                <a href={getMvcUrl("en/tenants/room-netherlands")}>
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
                <a href={getMvcUrl("en/create-room-advert")}>
                  Place advert
                </a>
              </li>
              <li id="menu_desk_studenthouse">
                <a
                  href={getMvcUrl(
                    "en/student-house/find-your-new-roommate"
                  )}
                >
                  Student House
                </a>
              </li>
              <li id="menu_desk_smartstudent">
                <a href={getMvcUrl("en/for-rent/appliances")}>
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
                  <Image
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
                <a href={getMvcUrl("en/how-does-it-work")}>
                  How does it work?
                </a>
              </li>
              <li id="menu_desk_aboutus_loggedout">
                <a href={getMvcUrl("en/about-us")}>
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
                <a href={getMvcUrl("en/safety-landlord")}>Safety</a>
              </li>
              <li id="menu_desk_usefultips_loggedout">
                <a href={getMvcUrl("tips/studenten")}>
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
    );
  };

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
              href="http://localhost"
              className="grid-item align-center-all logo color-background-secondary col-span-3--m col-span-1--s"
            >
              logo
            </a>
          </div>

          {!isSimpleHeader ? (
            <>
              <a
                href={getMvcUrl("en/search")}
                className="dark-white-hover for-desktop-s-up grid-item col-span-3 align-center-all link-subtle col-span-2--xl"
                id="header-search"
              >
                <i className="icon-m search color-background-secondary-light-1"></i>
                Search for a room
              </a>
              <a
                href={createAdvertUrl}
                className={`for-desktop-s-up grid-item col-span-3 align-center-all ${isLoggedIn ? "col-start-5" : "col-start-6"
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
              {isLoggedIn ? (
                <>
                  <a
                    href={getMvcUrl("en/my-adverts")}
                    className={`dark-white-hover for-desktop-up grid-item col-span-2 align-center-all link-subtle ${isLoggedIn ? "col-start-6" : "col-start-7"
                      }`}
                    id="header-my-adverts"
                  >
                    My adverts
                  </a>
                  <a
                    href={getMvcUrl("en/my-messages/default?itemsperpage=20&amp;pageno=1")}
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
                    href={getMvcUrl("en/my-favorites/rooms")}
                  >
                    <i className="icon-header header-favorite color-background-secondary"></i>
                  </a>
                  <a
                    data-tooltip="@Translator.TranslateText('LBL_MY_TODO_LIST_MENU')"
                    className="tooltipped dark-white-hover for-desktop-s-up grid-item align-center-all"
                    id="header-todo"
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

          {isLoggedIn && (
            <div
              className="for-desktop-s-up grid-item col-start-11 align-center-all col-start-7--m col-start-3--s "
              id="user-image"
            >
              <Image
                className="border-radius--s border-radius--no-bl"
                src={ProfilePhoto}
                width="48"
                height="48"
                alt="Your profile"
              />
            </div>
          )}

          <div
            className="for-desktop-s-up grid-item col-start-8--m col-start-12 align-center-all col-start-4--s floating-menu-trigger pointer"
            id="burger"
            onClick={handleBurgerClick}
          >
            {/* @* *** DESKTOP TRIGGER & FLOATING MENU ****@ */}
            <div className="for-desktop-s-up burger-wrapper">
              <div className="burger-icon"></div>
              {showBurger && <BurgerJSX />}
            </div>
            <i id="header-chevron-down"></i>
          </div>
        </div>
      </nav>
      {/* @* *** MOBILE MENU ****@ */}
      <nav id="mobile-menu" className="for-tablet-down">
        <div className="grid padding-h--sm spacer-v--sm">
          {isLoggedIn ? (
            <>
              <div className="grid-item">
                <div className="profile-wrapper">
                  <a
                    href={getMvcUrl("en/my-account")}
                    className="mobile-menu-user"
                  >
                    <Image
                      src={ProfilePhoto}
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
            <Image
              className="lang-flag"
              src={flag}
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
          {!isLoggedIn ? (
            <>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul>
                  <li>
                    <a data-modal-id="#modal-auth-login">Log in</a>
                  </li>
                  <li>
                    <a data-modal-id="#modal-auth-register">Create account</a>
                  </li>
                </ul>
              </div>

              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
            </>
          ) : null}

          <div className="grid-item col-span-4 col-span-12--m">
            <ul className="menu-first">
              <li className="submenu-item-selector">
                <a href={getMvcUrl("en/create-room-advert")}>
                  <i className="icon-m home color-background-secondary"></i>
                  Place advert
                </a>
              </li>
              <li>
                <a
                  href={getMvcUrl("en/for-rent/rooms-netherlands")}
                >
                  <i className="icon-m search color-background-secondary"></i>
                  Search room
                </a>
              </li>
              <li>
                <a href={getMvcUrl("en/tenants/room-netherlands")}>
                  <i className="icon-m search color-background-secondary"></i>
                  Searching for a tenant
                </a>
              </li>

              {!UserContextHelper?.CurrentUser?.HasActivePremiumMembership &&
                isLoggedIn ? (
                <li>
                  <a href={getMvcUrl("en/premium-account-payment")}>
                    Get Premium
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>

          {isLoggedIn ? (
            <>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul className="menu-first">
                  <li>
                    <a href={getMvcUrl("en/dashboard")}>
                      Dashboard
                    </a>
                  </li>
                  <li
                    data-attr="submenu-messages"
                    className="submenu-item-selector"
                    onClick={() => openSubMenu("submenu-messages")}
                  >
                    <a>Messages</a>
                    <span className="badge mobile-message-badge ">
                      {/* @Html.Action("GetUnreadConversationsCount", "Home", new{" "}
                  {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                    </span>
                  </li>
                  <li>
                    <a href={getMvcUrl("en/my-account")}>
                      My account
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
                    <a href="#!">My adverts</a>
                  </li>
                  <li>
                    <a href={getMvcUrl("en/public-profile")}>
                      Public profile
                    </a>
                  </li>
                  <li>
                    <a href={getMvcUrl("en/account/alerts")}>
                      Saved searches
                    </a>
                  </li>
                  <li>
                    <a href={getMvcUrl("en/my-favorites/rooms")}>
                      Favorites
                    </a>
                  </li>
                  <li>
                    <a href={getMvcUrl("en/account/settings")}>
                      Settings
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
                    href={getMvcUrl("en/studenthouse")}
                    className="white-text"
                  >
                    Student House
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href={getMvcUrl(
                      "en/student-house/find-your-new-roommate"
                    )}
                    className="white-text"
                  >
                    Student House
                  </a>
                </li>
              )}

              {UserContextHelper?.CurrentUser?.IsAuthenticated ? (
                <li className="mytodolist-menubar-mobile">
                  <a href={getMvcUrl("en/account/to-do")}>
                    To do
                    <span className="badge mobile-message-badge ">
                      {/* @Html.Action("GetToDoTasksCount", "Account", new{" "}
                  {(userId = UserContextHelper.CurrentUser.UserId)}) */}
                    </span>
                  </a>
                </li>
              ) : null}

              {SettingsManager?.Instance?.ReferFriendProgramEnabled &&
                isLoggedIn ? (
                <li>
                  <a href={getMvcUrl("en/referrals")}>
                    Refer a friend
                  </a>
                </li>
              ) : null}

              <li className="cashback-mobile">
                <a href={getMvcUrl("en/cashback")}>
                  Cashback & discounts
                </a>
              </li>
              <li className="smartstudent-mobile">
                <a href={getMvcUrl("en/for-rent/appliances")}>
                  Rent your appliances
                </a>
              </li>
            </ul>
          </div>

          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href={getMvcUrl("en/how-does-it-work")}>
                  How does it work?
                </a>
              </li>
              <li>
                <a href={getMvcUrl("en/about-us")}>
                  About Kamernet
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>

          <div className="grid-item col-span-4 col-span-12--m">
            <ul>
              <li>
                <a href={getMvcUrl("tips/studenten")}>
                  Useful tips
                </a>
              </li>
              <li>
                <a
                  href="https://support.kamernet.nl/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {isLoggedIn ? (
            <>
              <div className="grid-item col-span-4 divider color-background-secondary-light-1 col-span-12--m"></div>
              <div className="grid-item col-span-4 col-span-12--m">
                <ul>
                  <li>
                    <a href={getMvcUrl("en/logout")}>Log out</a>
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
                    href={getMvcUrl(
                      "en/my-messages/all?itemsperpage=20"
                    )}
                  >
                    All Messages
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unreplied ? _currentQueryString : itemsPerpage;} */}
                <li className="tab unreplied-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unreplied) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnrepliedMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/unreplied?itemsperpage=20"
                    )}
                  >
                    Unreplied conversations
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
                    href={getMvcUrl(
                      "en/my-messages/favorite?itemsperpage=20"
                    )}
                  >
                    Favorite messages
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.NotFavorites ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab notfavorite-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.NotFavorites) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetNotFavoritesMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/notfavorite?itemsperpage=20"
                    )}
                  >
                    Not favorite messages
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.ActiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab activeadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.ActiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetActiveAdvertsMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/activeadverts?itemsperpage=20"
                    )}
                  >
                    Messages active adverts
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.InactiveAdvert ? _currentQueryString : itemsPerpage;} */}
                <li className="tab inactiveadvert-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.InactiveAdvert) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetInactiveAdvertsMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/inactiveadverts?itemsperpage=20"
                    )}
                  >
                    Messages inactive adverts
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Read ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab read-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Read) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetReadMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/read?itemsperpage=20"
                    )}
                  >
                    Read messages
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Unread ? _currentQueryString : itemsPerpage;} */}
                <li className="hide tab unread-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Unread) { <text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetUnreadMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/unread?itemsperpage=20"
                    )}
                  >
                    Unread messages
                  </a>
                </li>

                {/* @{queryString = Model.CurrentMessageType == MessagesType.Trash ? _currentQueryString : itemsPerpage;} */}
                <li className="tab trash-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Trash) {<text> my-messages-menuitem-selected</text>}">
                  <a
                    data-content="@(Url.Action('GetTrashMessages', 'Messages') + queryString)"
                    href={getMvcUrl(
                      "en/my-messages/trash?itemsperpage=20"
                    )}
                  >
                    Trash
                  </a>
                </li>

                <li className="tab custom-messages collection-item sub-item @if (Model.CurrentMessageType == MessagesType.Custom) {<text> my-messages-menuitem-selected selection selected</text>}">
                  <a href={getMvcUrl("en/my-messages/custom")}>
                    Custom message
                  </a>
                </li>
              </ul>

              <ul className="col-span-4 submenu-mobile-wrapper submenu-properties translate-off-canvas-right col-span-12--m">
                <li className="mainmenu-item-selector" onClick={backToMain}>
                  <a href="#!">Back to main menu</a>
                </li>
                <li className="spacer-v--m">
                  <a href={getMvcUrl("en/my-adverts")}>
                    Active adverts
                  </a>
                </li>
                <li>
                  <a href={getMvcUrl("en/my-adverts/inactive")}>
                    Inactive adverts
                  </a>
                </li>
                <li>
                  <a href={getMvcUrl("en/my-adverts/draft")}>
                    Draft Adverts
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </div>
      </nav>
    );
  };

  const NavbarJSX = (
    <>
      <nav className="header box-shadow">
        <div className="grid color-text cols-8--m">
          {/* @* *** MOBILE MENU TRIGGER ****@ */}
          <div
            className="for-tablet-down grid-item col-span-1 spacer-h--s spacer-v--xs"
            onClick={handleMobileNavClick}
          >
            <div className="burger-wrapper mobile-menu-trigger">
              <div className="burger-icon"></div>
            </div>
          </div>
          {/* @******************************@ */}
          <div
            className={`brand-logo-wrapper ${
              isSimpleHeader ? "full-width" : ""
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
                className={`for-desktop-s-up grid-item col-span-3 align-center-all ${
                  isLoggedIn ? "col-start-5" : "col-start-6"
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
              {isLoggedIn ? (
                <>
                  <a
                    href="https://acceptance.kamernet.nl/en/my-adverts"
                    className={`dark-white-hover for-desktop-up grid-item col-span-2 align-center-all link-subtle ${
                      isLoggedIn ? "col-start-6" : "col-start-7"
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

          {isLoggedIn && (
            <div
              className="for-desktop-s-up grid-item col-start-11 align-center-all col-start-7--m col-start-3--s "
              id="user-image"
            >
              <Image
                className="border-radius--s border-radius--no-bl"
                src={ProfilePhoto}
                width="48"
                height="48"
                alt="Your profile"
              />
            </div>
          )}

          <div
            className="for-desktop-s-up grid-item col-start-8--m col-start-12 align-center-all col-start-4--s floating-menu-trigger pointer"
            id="burger"
            onClick={handleBurgerClick}
          >
            {/* @* *** DESKTOP TRIGGER & FLOATING MENU ****@ */}
            <div className="for-desktop-s-up burger-wrapper">
              <div className="burger-icon"></div>
              {showBurger && <BurgerJSX />}
            </div>
            <i id="header-chevron-down"></i>
          </div>
        </div>
      </nav>
      {showMobileNav && <MobileNavbarJSX />}

      <div className="my-todo-list color-background for-desktop-s-up"></div>
    </>
  );

  return <>{NavbarJSX}</>;
};

export default Navbar;
