import { Header } from "../components/header"
import { Hero } from "../components/hero"

export const Home = () => {
    return(
        <div className="min-h-screen flex flex-col bg-[url('/hero.jpg')] bg-center bbg-cover text-[#f5f5f5]">
            <Header />
            <main className="max-w-[85rem] mx-auto w-full p-6 flex-1 flex flex-col">
                <Hero />
            </main>
        </div> 
    )
}