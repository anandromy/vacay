import { Header } from "./components/header"
import { Hero } from "./components/hero"

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-[url('/hero.jpg')] text-white bg-cover bg-center">
      <Header />
      <main className="max-w-[85rem] mx-auto w-full p-6 flex-1 flex flex-col justify-center">
        <Hero />
      </main>
    </div>  
  )
}

export default App
