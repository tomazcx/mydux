interface CardInterface {
    img: React.ReactNode;
    title: string;
    desc: string;
}

export const AboutCard = ({ img, title, desc }: CardInterface) => {
    return (
        <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="bg-gradient-to-b from-purple-400 to-purple-200 rounded-full p-2">
                {img}
            </div>
            <h3 className="text-purple-400 text-2xl font-bold text-center lg:text-start">{title}</h3>
            <p className="text-center lg:text-start">{desc}</p>
        </div>
    )
}