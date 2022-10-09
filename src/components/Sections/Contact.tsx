import { Button } from "../Buttons/Button"
import { Input } from "../Form/Input"

export const Contact = () => {
    return (
        <form action="" className="bg-gray-50 px-8 pt-12 pb-24" id='contact'>
            <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="title-section">Contato</h2>
                    <h3 className="text-lg text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                </div>
                <Input label="Nome completo" required={true} id="name" type="text" />
                <Input label="Email" required={true} id="email" type="email" />
                <Input label="Número de celular" required={true} id="cellNum" type="text" />
                <Input label="Assunto" required={true} id="title" type="text" />
                <Input label="Descrição" required={true} id="title" type="textarea" />
                <Button text="Enviar" />
            </div>
        </form>
    )
}