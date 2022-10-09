interface InputInterface {
    label: string;
    type: string;
    id: string;
    required: boolean;
}

export const Input = ({ label, type, id, required }: InputInterface) => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <label htmlFor={id}>{label}{required ? <span className="text-red-400">*</span> : <></>}</label>

            {type === 'textarea' ?
                <textarea name={id} id={id} cols={30} rows={10} className="bg-gray-200 rounded-xl p-1 px-2"></textarea>
                :
                <input type={type} name={id} id={id} required={required} className="bg-gray-200 rounded-full p-1 px-2" />
            }
        </div>
    )
}