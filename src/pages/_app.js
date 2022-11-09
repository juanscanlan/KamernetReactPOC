import "@styles/components/Search/Select2.css";
import "@styles/components/Search/SearchBar.css";

import "@styles/main.scss";
import "@styles/full.scss";

import { appWithTranslation } from "next-i18next";

import $ from "jquery";

// TODO. Convert to module inside @core/Auth/AuthWrapper.jsx
import "@core/Auth/AuthWrapper/authWrapper.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type="text/javascript"
        src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
