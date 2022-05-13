import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-tabs/style/react-tabs.css";
import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";
import MiniFooter from "../components/MiniFooter/MiniFooter";
import ItemsButton from "../components/ItemsButton/ItemsButton";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <ItemsButton />
        <Component {...pageProps} />
        <Footer />
        <MiniFooter />
      </Provider>
    </>
  );
}

export default MyApp;
