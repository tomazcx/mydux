import Family from "../../assets/SVG/Family"
import FamilyMobile from "../../assets/SVG/FamilyMobile"
import { Button } from "../Buttons/Button"

export const Home = () => {
    return(
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 w-10/12 mx-auto" id="home">
          <div className="flex flex-col gap-8 mt-8 lg:mt-24 items-center lg:items-start">
            <h1 className="text-purple-400 text-2xl md:text-5xl font-bold text-center lg:text-start">Faça sua próxima <br /> viagem com MyDux</h1>
            <span className="text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. </span>
            <Button text="Comece agora" />
          </div>
          <div className="hidden md:block mx-auto lg:mx-0">
            <Family />
          </div>
          <div className="block md:hidden mx-auto">
            <FamilyMobile />
          </div>
        </section>
    )
}