import "../styles/globals.css";
import { MyAppProps } from "@/components/common/types";
import { Layouts } from "@/components/common/layouts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps}: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
       <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
