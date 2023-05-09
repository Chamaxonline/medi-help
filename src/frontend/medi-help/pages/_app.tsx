import "../styles/globals.css";
import { MyAppProps } from "@/components/common/types";
import { Layouts } from "@/components/common/layouts";
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
