import Footer from "../Layout/Footer";

import "../styles/globals.css";
import "../styles/css/Navigation.css";
import "../styles/css/Header.css";
import "../styles/css/Hero.css";
import "../styles/css/Categories.css";
import "../styles/css/FeaturedPost.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
