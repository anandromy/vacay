import { MenuIcon } from "lucide-react"

export const Header = () => {
    return(
        <header className="flex items-center justify-between pt-6 max-w-[85rem] mx-auto w-full px-6">
        <div className="flex items-center gap-x-3 md:gap-x-6 flex-1 md:items-stretch">
          <MenuIcon className="w-6 h-6 md:hidden" />
          <h2 className=" hidden font-bold text-3xl italic md:block">vacay</h2>
          <input className="rounded border py-2 px-3 min-w-[250px] md:max-w-[420px] w-1/2 flex-1" placeholder="Search for destinations" />
        </div>
        <div className="flex items-center gap-6 hidden md:flex">
          <p>USD</p>
          <button className="rounded-full py-2 px-4 border">Sign up</button>
          <button className="rounded-full py-2 px-4 border">Log in</button>
        </div>
      </header>
    )
}