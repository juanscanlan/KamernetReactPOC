import "../styles/globals.css";

// TODO. Convert to module inside @core/Auth/AuthWrapper.jsx
import "@core/Auth/AuthWrapper/authWrapper.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;