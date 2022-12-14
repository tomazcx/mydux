import Hamburguer from "../../assets/SVG/hamburguer"
import LogoHeader from "../../assets/Logo/logo-header"
import LogoMobile from "../../assets/Logo/logo-header-mobile"
import { useState } from "react"
import { Modal } from "../Header/Modal"

export const Header = () => {

    const [modalActive, setActive] = useState(false)

    return (
        <header className="flex items-center justify-between lg:px-32 px-8 text-purple-400 w-100">
            {modalActive ? <Modal setActive={setActive} /> : <></>}
            <div className="block md:hidden">
                <LogoMobile />
            </div>
            <div className="hidden md:block">
                <LogoHeader />
            </div>
            <nav className="gap-12 items-center font-bold hidden lg:flex">
                <a href="#home" className="hover:opacity-95 transition-opacity">Home</a>
                <a href="#about" className="hover:opacity-95 transition-opacity">Sobre Nós</a>
                <a href="#blog" className="hover:opacity-95 transition-opacity">Blog</a>
                <a href="#feedback" className="hover:opacity-95 transition-opacity">Depoimentos</a>
                <a href="#contact" className="hover:opacity-95 transition-opacity">Contato</a>
            </nav>
            <div className="block lg:hidden" onClick={() => setActive(!modalActive)}>
                <Hamburguer />
            </div>
        </header>
    )
}