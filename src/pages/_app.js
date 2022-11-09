import "@styles/components/Search/Select2.css";
import "@styles/components/Search/SearchBar.scss";

import "@styles/main.scss";
import "@styles/full.scss";

import { BaseLayout } from "@core/Layout/BaseLayout";
import { AuthProvider } from "@core/Auth/AuthProvider";
import { appWithTranslation } from "next-i18next";

import $ from "jquery";

// TODO. Convert to module inside @core/Auth/AuthWrapper.jsx
import "@core/Auth/AuthWrapper/authWrapper.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider userId={pageProps.userId}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
