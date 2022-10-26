import React from "react";
import { useState } from "react";

import Navbar from "@components/NavBar/NavBar";
import AuthWrapper from "@core/Auth/AuthWrapper/AuthWrapper";

import { initModal } from "@utilities/Modals/Modals";
import { useEffect } from "react";
import Head from "next/head";

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
    console.log("potato logged in");
  };

  const successfulLogoutHandler = () => {
    setIsUserLoggedIn(false);
    console.log("potato logged out");
  };

  const successfulRegisterHandler = () => {
    setIsUserLoggedIn(true);
  };

  useEffect(() => {
    fetch("http://localhost:50001/api/customer/view", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((body) => {
        setIsUserLoggedIn(body.userid != null);
        setIsAppInitialized(true);
        initModal();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //isAppInitialized
  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return isAppInitialized ? (
    <>
      <AuthWrapper
        successfulLoginHandler={successfulLoginHandler}
        successfulRegisterHandler={successfulRegisterHandler}
      />
      <Navbar
        isUserLoggedIn={isUserLoggedIn}
        successfulLogoutHandler={successfulLogoutHandler}
      />
      <div className={className}>{children}</div>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "100px",
        height: "100vh",
      }}
    >
      Initializing...
    </div>
  );
};

export default BaseLayout;
