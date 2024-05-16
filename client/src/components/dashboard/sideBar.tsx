import { CalendarCheckIcon, CalendarPlus2Icon, HotelIcon, LayoutDashboardIcon, LogOutIcon, UserIcon } from "lucide-react"
import { SidebarItem } from "./sidebarItem"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export const DashBoardSidebar = () => {
    return(
        <div className="fixed w-[256px] h-full border-r bg-[#05073d] text-primary-foreground flex flex-col">
            <div className="p-5 pl-10 border-b border-muted-foreground w-full">
                <Link to="/">
                    <h1 className="text-2xl font-bold">vacay</h1>
                </Link>
            </div>
            <div className="flex-1 flex flex-col w-full">
                <nav className="py-6 px-6 flex flex-col items-start gap-3">
                    <SidebarItem href="" label="Dashboard" icon={LayoutDashboardIcon} />
                    <SidebarItem href="/my-bookings" label="My bookings" icon={CalendarCheckIcon} />
                    <SidebarItem href="/my-hotels" label="My hotels" icon={HotelIcon} />
                    <SidebarItem href="/add-tour" label="Add tour" icon={CalendarPlus2Icon} />
                    <SidebarItem href="/profile" label="My Profile" icon={UserIcon} />
                    <Button variant="sidebar" className="flex items-center gap-2 w-full justify-start hover:bg-muted/10">
                        <LogOutIcon />
                        Logout
                    </Button>
                </nav>
            </div>
        </div>
    )
}