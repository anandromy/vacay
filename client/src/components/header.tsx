import { MenuIcon, ChevronDownIcon } from "lucide-react"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { Link } from "react-router-dom"
import { Signup } from "./signup"
import { Login } from "./login"
import { useAppContext } from "@/context/appContext"
import { Button } from "./ui/button"
import { Account } from "./account"

export const Header = () => {
  const scrollPosition = useScrollPosition()
  const {isLoggedIn} = useAppContext()
    return(
        <header className={`sticky top-0 px-6 py-5 ${scrollPosition > 0 && "bg-[#05073C] text-white"}`}>
          <div className="flex items-center justify-between md:max-w-[85rem] mx-auto w-full">
        <div className="flex items-center gap-x-3 md:gap-x-6 flex-1 md:items-stretch">
          <MenuIcon className="w-6 h-6 md:hidden" />
          <Link to="/" className=" hidden font-bold text-3xl italic md:block">vacay</Link>
          <input className="hidden md:block text-black focus:outline-none rounded border py-2 px-3 md:max-w-[420px] w-1/2" placeholder="Search for destinations" />
        </div>
          {isLoggedIn ? (
            <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-1 py-2 px-4 rounded-full hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">
              <span>USD</span>
              <ChevronDownIcon />
            </button>
            <button className="py-2 px-4 rounded-full hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">My Bookings</button>
            <Account />
          </div>
          ):(
            <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-1 py-2 px-4 rounded-full hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">
              <span>USD</span>
              <ChevronDownIcon />
            </button>
            <Signup />
            <Login trigger="Log in" />
          </div>
          )}
      </div>
        </header>
    )
}