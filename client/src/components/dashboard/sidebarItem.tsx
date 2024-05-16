import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { LucideIcon } from "lucide-react"
type Props = {
    href: string,
    icon: LucideIcon
    label: string
}

export const SidebarItem = ({ href, label, icon: Icon }: Props) => {
    const { pathname } = useLocation()
    const active = pathname === `/dashboard${href}`
    return(
        <Button variant={active ? "sidebarActive" : "sidebar"} className="justify-start w-full" asChild>
            <Link to={`/dashboard${href}`} className="flex items-center gap-2">
                <Icon className="h-5 w-5"/>
                {label}
            </Link>
        </Button>
    )
}