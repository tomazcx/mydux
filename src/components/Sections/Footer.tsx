import LogoFooter from "../../assets/Logo/logo-footer"
import { SocialMedia } from "../Footer/SocialMedia"

export const Footer = () => {
    return (
        <footer className="bg-purple-400 p-16 grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 text-white text-sm">
            <div className="flex flex-col gap justify-between items-center">
                <LogoFooter />
                <SocialMedia size="lg" />
            </div>

            <ul className="flex flex-col gap-6">
                <li className="font-semibold text-center lg:text-start">Navegue pelo site</li>
                <div className="flex flex-col gap-4 items-center lg:items-start">
                    <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
                    <a href="#about" className="hover:text-gray-300 transition-colors">Sobre Nós</a>
                    <a href="#blog" className="hover:text-gray-300 transition-colors">Blog</a>
                    <a href="#feedback" className="hover:text-gray-300 transition-colors">Depoimentos</a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors">Contato</a>
                </div>
            </ul>
            <ul className="flex flex-col gap-6">
                <li className="font-semibold text-center lg:text-start">Onde nos encontrar</li>
                <div className="flex flex-col gap-4 items-center lg:items-start">
                    <li>Videira, SC</li>
                    <li>Rod. Eng. Lineau Bonato</li>
                    <li>S/N - Campo Experimental</li>
                    <li>89560-000</li>
                </div>
            </ul>
            <ul className="flex flex-col gap-6">
                <li className="font-semibold text-center lg:text-start">Interaja Conosco</li>
                <div className="flex flex-col gap-4 items-center lg:items-start">
                    <a href="#guide" className="hover:text-gray-300 transition-colors">Contate um guia</a>
                    <a href="#blog" className="hover:text-gray-300 transition-colors">Conheça nossa newsletter</a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors">Contate-nos</a>
                </div>
            </ul>
            <SocialMedia size="sm" />
        </footer>
    )
}