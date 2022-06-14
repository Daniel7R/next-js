import Layout from "@components/Layout/Layout";
import 'semantic-ui-css/semantic.min.css'
import '../global.css'
import CartProvider from "@store/Cart";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
