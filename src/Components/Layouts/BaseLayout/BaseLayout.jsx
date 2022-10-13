import React from "react";
import Navbar from "../../NavBar/Navbar";
import AuthWrapper from "../AuthWrapper/AuthWrapper";

const BaseLayout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return (
    <div>
      <Navbar />
      <AuthWrapper />
      <div className={className}>{children}</div>
    </div>
  );
};

export default BaseLayout;
