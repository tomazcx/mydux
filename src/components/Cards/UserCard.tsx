interface CardInterface {
    img: string;
    name: string;
    desc: string;
    order?: number;
}

export const UserCard = ({ img, name, desc, order }: CardInterface) => {

    const applyPos = () => {
        switch (order) {
            case (2):
                return 'lg:top-16'
            case (3):
                return 'lg:top-32'
        }
    }

    return (
        <div className={`${applyPos()} flex relative flex-col items-center text-center`}>
            <div className="rounded-full border-4 border-gray-50 relative top-12 w-auto p-1">
                <img src={img} alt="User photo" width={80} className="rounded-full" />
            </div>
            <div className="bg-gray-50 pt-12 pb-8 px-4 rounded-xl flex flex-col gap-4">
                <h3>{name}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
            </div>
        </div>
    )
}