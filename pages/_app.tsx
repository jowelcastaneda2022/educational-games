import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store";
import { Provider } from "unistore/react";
import { store } from "../unistore";

function MyApp({ Component, pageProps }: AppProps) {
  const WrappedComponent = wrapper.withRedux(Component);

  return (
    <Provider store={store}>
      <WrappedComponent {...pageProps} />
    </Provider>
  );
}

export default MyApp;
