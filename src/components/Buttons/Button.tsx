interface ButtonInterface{
    text: string;
}

export const Button = ({text} : ButtonInterface) => {
    return(
        <button className="text-white rounded-full bg-gradient-to-r from-purple-400 to-purple-200 font-semibold py-2 px-8 text-lg lg:text-xl max-w-[220px]">
            {text}
        </button>
    )
}