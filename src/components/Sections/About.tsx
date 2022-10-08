import Map from "../../assets/SVG/Map"
import Plane from "../../assets/SVG/Plane"
import Question from "../../assets/SVG/Question"
import { AboutCard } from "../Cards/AboutCard"


export const About = () => {
    return(
        <article className="bg-gray-50 py-12" id="about">
          <div className="mx-auto w-10/12 flex flex-col gap-16 lg:gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-purple-400 font-semibold text-2xl md:text-4xl text-center lg:text-start">Sobre Nós</h2>
              <p className="text-gray-600 text-normal md:text-xl text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Sed sed blandit neque.</p>
            </div>
            <div className="flex gap-16 lg:gap-8 flex-col lg:flex-row">
              <AboutCard img={<Plane />} title="Vivamus ac pretium eros?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. " />
              <AboutCard img={<Question />} title="Vivamus ac pretium eros?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. " />
              <AboutCard img={<Map />} title="Vivamus ac pretium eros?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. " />

            </div>
          </div>
        </article>
    )
}