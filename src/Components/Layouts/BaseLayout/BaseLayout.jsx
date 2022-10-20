import React from "react";
import Navbar from "../../NavBar/NavBar";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const BaseLayout = ({
  title = "Title",
  description = "Description",
  className,
  children,
  onTriggerLoginDialog
}) => {
  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return (
    <div>
      <Navbar onTriggerLoginDialog={onTriggerLoginDialog}/>
      <div className={className}>{children}</div>
    </div>
  );
};

export default BaseLayout;
