import React from "react";

const BaseLayout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  // We could use react-helmet to insert the title and description in the <head> https://www.npmjs.com/package/react-helmet
  return (
    <div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default BaseLayout;
