import { Children, PropsWithChildren } from "react";
import Navbar from "./navbar";

const MainLayout = (props:PropsWithChildren) => {
    return(
        <>
        <Navbar/>
        <main>{props.children}</main>
        </>
    );
    
};

export default MainLayout