import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from 'next/router'
export default function Layout (props) {
    const router = useRouter()
 
    var title 
    if (router.pathname === "/") {
        title = "home"
    } else if (router.pathname === "/animes-vf") {
        title = "Animes VF"
    } else if (router.pathname === "/animes-vostfr") {
        title = "Animes VOSTFR"
    } else if (router.pathname === "/planing") {
        title = "planing"
    } else if (router.pathname === "/profil") {
        title = "profil"
    } else if (router.pathname === "/aide") {
        title = "aide"
    }
 else if (router.pathname === "/animes") {
    title = "animes"
} 


    return (
        <>
         <main className="min-h-screen relative bg-zinc-100  dark:bg-zinc-800 pb-2 ">
            <Navbar page={title} />
            {props.children}
            </main>
            <Footer />
        </>
    )

 
}