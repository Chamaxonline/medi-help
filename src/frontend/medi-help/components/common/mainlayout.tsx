import { Children, PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = (props:PropsWithChildren) => {
    return(
        <>
        <Navbar/>
        <main>{props.children}</main>
        <Footer/>
        </>
    );
    
};

export default MainLayout