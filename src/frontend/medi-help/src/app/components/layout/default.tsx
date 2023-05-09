import NavBar from "@/app/navbar/page"

export default function DefaultLayout({children}){
    return(
        <div>
            <NavBar/>
            <main>{children}</main>
            </div>
    )
}