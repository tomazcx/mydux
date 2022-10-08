import { Button } from "./components/Buttons/Button"
import { UserCard } from "./components/Cards/UserCard"
import { About } from "./components/Sections/About"
import { Footer } from "./components/Sections/Footer"
import { Guide } from "./components/Sections/Guide"
import { Header } from "./components/Sections/Header"
import { Home } from "./components/Sections/Home"


function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex flex-col justify-between gap-24 lg:gap-8 lg:pt-6">
        <Home />
        <About />
        <Guide />
        <article className="w-10/12 mx-auto flex flex-col items-center lg:items-start" id="feedback">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl text-purple-400 font-bold">O que eles disseram</h1>
            <p className="text-gray-600 text-normal md:text-xl text-center lg:text-start" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque.</p>
          </div>
          <div className="flex flex-col gap-16 lg:gap-8 lg:flex-row">
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default App
