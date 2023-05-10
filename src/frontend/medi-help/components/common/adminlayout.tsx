import { PropsWithChildren } from "react";
import AdminNavbar from "./adminnavbar";
import Footer from "./footer";

const AdminLayout = (props:PropsWithChildren) => {
    return(
        <>
        <AdminNavbar />
      {props.children}
      <Footer/>
        </>
    )

};
 export default AdminLayout;