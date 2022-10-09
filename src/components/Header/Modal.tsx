interface ModalInterface{
    setActive (value:boolean): void;
}

export const Modal = ({setActive} : ModalInterface) => {
    return(
        <div className="bg-purple-400 rounded-xl flex flex-col py-8 px-4 mx-auto gap-6 items-center w-10/12 absolute animate-show top-12">
            <a onClick={() => setActive(false)}  href="#home" className="text-white font-bold">Home</a>
            <a onClick={() => setActive(false)}  href="#about" className="text-white font-bold">Sobre nós</a>
            <a onClick={() => setActive(false)}  href="#blog" className="text-white font-bold">Blog</a>
            <a onClick={() => setActive(false)}  href="#feedback" className="text-white font-bold">Depoimentos</a>
            <hr className="border-white w-full" />
            <a onClick={() => setActive(false)}  href="#contact" className="text-white font-bold bg-purple-200 text-center py-2 rounded-full w-full">Contact</a>
        </div>
    )
}