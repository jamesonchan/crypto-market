import "../styles/globals.css";
import '../styles/app.css'
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps}/>
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
