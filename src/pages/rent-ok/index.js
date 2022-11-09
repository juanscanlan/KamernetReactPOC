import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
      ...(await serverSideTranslations(locale, ["rent-ok", "common"])),
      userId: userid ?? null
    },
  };
}

export { RentOk as default } from "@views/RentOk";