import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Page from "@views/Home/Home";

// Locale gets the current language from the url, given the language codes in next-i18next.config.js
export async function getStaticProps({ locale }) {
  return {
    props: {
      // Grab the translations from the files set in the square brackets, located in public/locales/*/
      ...(await serverSideTranslations(locale, ["rent-ok", "common"])),
    },
  };
}

// The props value must be kept, so that it recieves the props from getStaticProps
export default function Home(props) {
  const { t } = useTranslation(["rent-ok", "common"]);

  //   t('key'); // will be looked up from namespace ns1
  // t('key', { ns: 'ns2' }); // will be looked up from namespace ns2
  //https://react.i18next.com/latest/usetranslation-hook

  return <Page T={t} />;
}
