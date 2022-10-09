import { About } from "./components/Sections/About"
import { Feedback } from "./components/Sections/Feedback"
import { Footer } from "./components/Sections/Footer"
import { Section } from "./components/Sections/Section"
import { Header } from "./components/Sections/Header"
import { Home } from "./components/Sections/Home"
import { Input } from "./components/Form/Input"
import { Button } from "./components/Buttons/Button"

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex flex-col justify-between gap-24 lg:gap-16 lg:pt-6">
        <Home />
        <About />
        <Section title="Agende um encontro com um de nossos guias" btn="Comece Agora" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa." />
        <Feedback />
        <Section title="Cadastre-se em nossa Newsletter" btn="Confira Aqui  " desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. " />
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
      </main>
      <Footer />
    </div>
  )
}

export default App
