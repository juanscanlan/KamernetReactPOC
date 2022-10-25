import React from "react";
import { useState } from "react";

import Navbar from "../../NavBar/NavBar";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

import { initModal } from "../../../Scripts/Components/Modals/Modals";
import { useEffect } from "react";

const BaseLayout = ({
  title = "Title",
  description = "Description",
  className,
  children,
  // onTriggerLoginDialog,
}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  const successfulLoginHandler = () => {
    setIsUserLoggedIn(true);
  };

  const successfulRegisterHandler = () => {
    setIsUserLoggedIn(true);
  };

  useEffect(() => {
    // Get all the necessary information (like user info, translations, links, ...) for initializing the app
    fetch("http://localhost:50001/api/customer/view", {
      method: "GET",
      credentials: "include" // this flag is required for exachanging cookies with the API
    })
      .then(response => response.json())
      .then(body => {
        setIsUserLoggedIn(body.userid != null);
        setIsAppInitialized(true);
        initModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Show the app content if initializing is finished, otherwise just show a text
  return (
    isAppInitialized ?
      (
        <div>
          <AuthWrapper successfulLoginHandler={successfulLoginHandler} successfulRegisterHandler={successfulRegisterHandler} />
          <Navbar isUserLoggedIn={isUserLoggedIn} />
          <div className={className}>{children}</div>
        </div>
      ) :
      (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '100px', height: '100vh' }}>
          Initializing...
        </div>
      )
  );
};

export default BaseLayout;
