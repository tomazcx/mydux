import { Button } from "../Buttons/Button"

export const Guide = () => {
    return (
        <section className="w-10/12 mx-auto max-w-[500px] flex flex-col gap-6 items-center" id="guide">
            <h2 className="text-purple-400 text-center font-bold text-xl md:text-2xl">Agende um encontro com um <br /> de nossos guias</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. </p>
            <Button text="Comece Agora" />
        </section>
    )
}