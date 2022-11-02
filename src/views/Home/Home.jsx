import { useState } from "react";

import BaseLayout from "@core/Layout/BaseLayout/BaseLayout";
import Image from "next/image";

const isMobile = false;

const Home = ({ T }) => {
  const HomeJSX = <div>Potato</div>;

  return (
    <BaseLayout
      title="Home"
      description="Home page"
      className="container padding-h--s"
    >
      {HomeJSX}
    </BaseLayout>
  );
};

export default Home;
