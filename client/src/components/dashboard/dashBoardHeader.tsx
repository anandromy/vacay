import { MenuIcon, ChevronDownIcon } from "lucide-react"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import { Button } from "../ui/button"
import { Account } from "../account"

export const DashBoardHeader = () => {
  const scrollPosition = useScrollPosition()
  
    return(
        <header className={`sticky top-0 py-4 px-6 lg:pr-6 lg:pl-[280px] border-b shadow ${scrollPosition > 0 && "bg-[#05073C] text-white"}`}>
          <div className="flex items-center justify-between mx-auto w-full">
            <div>
              <MenuIcon className="h-5 w-5 text-muted-foreground lg:hidden"/>
            </div>
            <div className="flex flex-1 items-center gap-3 lg:gap-6 justify-self-end justify-end">
            <button className="flex flex-nowrap items-center gap-1 py-2 px-4 rounded-full hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">
              <span>USD</span>
              <ChevronDownIcon />
            </button>
            <Account />
          </div>
        </div>
      </header>
    )
}