import { Phone, FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react"

interface RenderInterface {
    size: string;
}

export const SocialMedia = ({ size }: RenderInterface) => {
    return (
        <div className={`${size === "lg" ? "hidden lg:flex gap-4 justify-between" : "flex lg:hidden  mx-auto gap-8"}`}>
            <a href="#">
                <InstagramLogo size={32} color="#ffffff" />
            </a>
            <a href="#">
                <FacebookLogo size={32} color="#ffffff" />
            </a>
            <a href="#">
                <TwitterLogo size={32} color="#ffffff" />
            </a>
            <a href="#">
                <Phone size={32} color="#ffffff" />
            </a>
        </div>
    )
}