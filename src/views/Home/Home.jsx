import { useState } from "react";

import BaseLayout from "@core/Layout/BaseLayout/BaseLayout";
import Image from "next/image";
import SearchWrapper from "./components/SearchWrapper";
import Advertise from "./components/Advertise";
import { Cities } from "./components/Cities";
import { useTranslation } from "next-i18next";

const isMobile = false;

export const Home = ({ T }) => {
  const { t } = useTranslation(["home", "common"]);
  const HomeJSX = <div>Potato</div>;

  return (
    <>
      <SearchWrapper />
      <Advertise />
      <Cities t={t} />
      {HomeJSX}
    </>
  );
};
