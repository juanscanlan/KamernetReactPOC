// export { default } from "@views/RentOk/RentOk";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Page from "@views/RentOk/RentOk";

// Locale gets the current language from the url, given the language codes in next-i18next.config.js
export async function getStaticProps({ locale }) {
  return {
    props: {
      // Grab the translations from the files set in the square brackets, located in public/locales/*/
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// The props value must be kept, so that it recieves the props from getStaticProps
export default function Home(props) {
  const { t } = useTranslation("common");

  return <Page T={t} />;
}
