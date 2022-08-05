import { Provider } from "react-redux";
import { store } from "../redux";
import axios from "axios";
import "../styles/global.scss";
import { Layout } from "../components";

// axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.baseURL = "https://milk-manager.herokuapp.com/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
