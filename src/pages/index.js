import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BaseLayout from "@core/Layout/BaseLayout/BaseLayout";

// Locale gets the current language from the url, given the language codes in next-i18next.config.js
export async function getStaticProps({ locale }) {
  return {
    props: {
      // Grab the translations from the files set in the square brackets, located in public/locales/*/
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
}

// The props value must be kept, so that it recieves the props from getStaticProps
export { Home as default } from "@views/Home/Home";