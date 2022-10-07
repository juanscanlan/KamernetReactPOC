import React from 'react'

import './NavBar.css'

export const NavBar = () => {

    const NavBarJSX = (
        
<nav>
    <div className="nav-wrapper">
        <div className="col s12 kamernet-grey darken-1">

            <div id="mm-hamburger" className="hamburger--collapse js-toggle-left-slidebar button-collapse hide-on-large-only">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </div>

            {/* this is an extra message counter for mobile */}
            <div className="hide-on-med-and-up badge mobile-message-badge-hamburger">{/*@Html.Action("GetUnreadConversationsCount", "Home", new { userId = UserContextHelper.CurrentUser.UserId })*/}</div>

            <ul className="left header-ulist">
                <li className="disable-hover">
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Home)" className="logo"></a>
                </li>
                <li className="search-rooms-menubar hide-on-med-and-down">
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)"><i className="fa fa-search" aria-hidden="true"></i> @Translator.TranslateText("LBL_HEADER_SEARCH")</a>
                </li>
            </ul>

            <ul className="right hide-on-med-and-down">
                <li className="disable-hover hide-on-med-and-down place-button-container">
                    <a href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.CreateRoomAdvertOrCompleteDraft)" className="btn waves-effect waves-light header-ca-button kamernet-orange z-depth-0">@Translator.TranslateText("LBL_MENU_CREATE_ADVERT")</a>
                </li>

                {/* @if (UserContextHelper.CurrentUser.IsAuthenticated)
                {
                <li className="menubar">
                    <a style="padding-top:20px;" className="for-desktop-up" href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.MyAdverts)">
                        @Translator.TranslateText("LBL_ADVERTS_MENU")
                    </a>
                </li>
                } */}
                <li className="menubar">
                    <a href="@_messageUrl" className="message-menubar tooltipped" data-position="bottom" data-delay="50" data-tooltip='@Translator.TranslateText("LBL_MENU_BAR_TT_MESSAGES")'>
                        <i className="header-mail"></i>
                        {/*@Html.Action("GetUnreadConversationsCount", "Home", new { userId = UserContextHelper.CurrentUser.UserId })*/}
                    </a>
                </li>
                <li className="menubar">
                    <a href="@_favoriteUrl" className="myfavorites-menubar tooltipped" data-position="bottom" data-delay="50" data-tooltip='@Translator.TranslateText("LBL_GLOBAL_FAVORITES")'>
                        <i className="header-favorite"></i>
                    </a>
                </li>
                {/* @if (UserContextHelper.CurrentUser.IsAuthenticated)
                {
                    <li className="menubar">
                        <a className="mytodolist-menubar tooltipped" data-position="bottom" data-delay="50" data-tooltip="@Translator.TranslateText("LBL_MY_TODO_LIST_MENU")">
                            <i className="header-check"></i>@Html.Action("GetToDoTasksCount", "Account", new { userId = UserContextHelper.CurrentUser.UserId })
                        </a>
                    </li>
                } */}

                <li className="disable-hover right-menu profile-photo-menubar">
                    <img src="@ProfilePhoto" alt="" className="circle valign profile-image "/>
                    <div className="menu_right_icon"><i className="fa fa-bars" aria-hidden="true"></i></div>
                    <div className="caret-menubar"><i className="fa fa-caret-down" aria-hidden="true"></i></div>
                </li>
            </ul>

            {/* @if (showAppBtnToStore)
            {
                <a onclick="" href="@appStoreHref" className="btn waves-effect waves-light header-app-button transparent z-depth-0 right hide-on-large-only">APP</a>
            } */}
        </div>
    </div>
</nav>
    );


  return (
    <div>{NavBarJSX}</div>
  )
}
