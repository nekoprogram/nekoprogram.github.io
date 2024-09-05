import { Outlet } from "react-router-dom";


import '../App.css'

import Header from '../Components/Header/Header';
import AsideNavBar from '../Components/AsideNavBar/AsideNavBar';
import Footer from '../Components/Footer/Footer';
export default function Layout() {
    return (
        <>
            <main>
                <section id="leftsection">
                    <img id="nekoimage" src="/nekoprogram_img.png" alt="Nekoprogram image" />
                    <Header text="NekoProgram" />
                    <h5>aka ProgramNeko</h5>
                    <AsideNavBar />
                </section>
                <section id="rightsection">
                    <Outlet/>
                </section>
                
            </main>
            <Footer></Footer>
        </>
    )
}