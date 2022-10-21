import React from "react";
import { useState } from "react";

import Navbar from "../../NavBar/NavBar";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

import { init } from "../../../Scripts/Components/Modals/Modals";

const BaseLayout = ({
  title = "Title",
  description = "Description",
  className,
  children,
  // onTriggerLoginDialog,
}) => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const onTriggerLoginDialog = () => {
    // console.log("potato");
    setShowLoginDialog(!showLoginDialog);
  };

  // Initialize modals (old version from .net solution)
  init();

  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return (
    <div>
      <AuthWrapper
        showLoginDialog={showLoginDialog}
        onTriggerLoginDialog={onTriggerLoginDialog}
      />
      <Navbar onTriggerLoginDialog={onTriggerLoginDialog} />
      <div className={className}>{children}</div>
    </div>
  );
};

export default BaseLayout;
