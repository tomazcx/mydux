import { About } from "./components/Sections/About"
import { Feedback } from "./components/Sections/Feedback"
import { Footer } from "./components/Sections/Footer"
import { Section } from "./components/Sections/Section"
import { Header } from "./components/Sections/Header"
import { Home } from "./components/Sections/Home"
import { Contact } from "./components/Sections/Contact"

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
        <Contact/>
      </main>
      <Footer />
    </div>
  )
}

export default App
