import { MenuIcon } from "lucide-react"

export const Header = () => {
    return(
        <header className="sticky top-0 px-6 py-4">
          <div className="flex items-center justify-between md:max-w-[85rem] mx-auto w-full">
        <div className="flex items-center gap-x-3 md:gap-x-6 flex-1 md:items-stretch">
          <MenuIcon className="w-6 h-6 md:hidden" />
          <h2 className=" hidden font-bold text-3xl italic md:block">vacay</h2>
          <input className="hidden md:block text-black focus:outline-none rounded border py-2 px-3 md:max-w-[420px] w-1/2" placeholder="Search for destinations" />
        </div>
        <div className="flex items-center gap-6">
          <p className="hidden md:block">USD</p>
          <button className="rounded-full py-2 px-4 border">Sign up</button>
          <button className="rounded-full py-2 px-4 border">Log in</button>
        </div>
      </div>
        </header>
    )
}