//import "../styles/globals.css";
import "@styles/main.css";
import "@styles/full.css";

// TODO. Convert to module inside @core/Auth/AuthWrapper.jsx
import "@core/Auth/AuthWrapper/authWrapper.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
