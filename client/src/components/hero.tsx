import { HeroSearch } from "./heroSearch"

export const Hero = () => {
    return(
        <div className="h-[100vh]">
            <div className="mx-auto md:w-10/12 flex flex-col-reverse md:flex-col items-center justify-center px-6 gap-10 h-full">
                <HeroSearch />
                <div>
                    <h1 className="text-3xl md:text-7xl font-bold mx-auto text-center lg:text-start">
                        Find Next Place To Visit
                    </h1>
                    <p className="text-center leading-loose">
                        Discover amazing at exclusive deals. Eat, Shop, Visit
                        <br className="hidden md:block"></br> interesting places around the world
                    </p>
                </div>
            </div>
        </div>
    )
}