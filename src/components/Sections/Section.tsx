import { Button } from "../Buttons/Button"

interface SectionInterface{
    title:string;
    desc:string;
    btn:string;
}

export const Section = ({title, desc, btn} : SectionInterface) => {
    return (
        <section className="w-10/12 mx-auto max-w-[500px] flex flex-col gap-6 items-center" id="guide">
            <h2 className="text-purple-400 text-center font-bold text-xl md:text-2xl max-w-[400px]">{title}</h2>
            <p className="text-center">{desc}</p>
            <Button text={btn} />
        </section>
    )
}