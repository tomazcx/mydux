import Hamburguer from "../assets/hamburguer"
import LogoHeader from "../assets/logo-header"
import LogoMobile from "../assets/logo-header-mobile"

export const Header = () => {
    return (
        <header className="flex items-center justify-between lg:px-32 px-8 text-purple-400 w-100">
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
            <div className="block lg:hidden">
                <Hamburguer />
            </div>
        </header>
    )
}