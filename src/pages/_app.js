import "@styles/components/Search/Select2.css";
import "@styles/components/Search/SearchBar.css";

import "@styles/main.scss";
import "@styles/full.scss";

import { appWithTranslation } from "next-i18next";

// TODO. Convert to module inside @core/Auth/AuthWrapper.jsx
import "@core/Auth/AuthWrapper/authWrapper.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
