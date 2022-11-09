import React from "react";
import { useState } from "react";

import Navbar from "@components/NavBar/NavBar";
import AuthWrapper from "@core/Auth/AuthWrapper/AuthWrapper";

import { initModal } from "@utilities/Modals/Modals";
import { useEffect } from "react";

export const BaseLayout = ({children}) => {

  useEffect(() => {
    initModal();
  }, []);

  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return (
    <>
      <AuthWrapper />
      <Navbar />
      <div>{children}</div>
    </>
  );
};
