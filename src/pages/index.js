import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BaseLayout from "@core/Layout/BaseLayout/BaseLayout";

// Locale gets the current language from the url, given the language codes in next-i18next.config.js
export async function getServerSideProps({ locale, req }) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_APP_SERVICES_URL + '/customer/view',
    { method: 'GET', headers: { Cookie: req.headers.cookie } }
  );
  const { userid } = await response.json();
  return {
    props: {
      // Grab the translations from the files set in the square brackets, located in public/locales/*/
      ...(await serverSideTranslations(locale, ["home", "common"])),
      userId: userid ?? null
    },
  };
}

// The props value must be kept, so that it recieves the props from getStaticProps
export { Home as default } from "@views/Home/Home";