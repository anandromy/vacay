import { UserIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuGroup} from "./ui/dropdown-menu"
import { Link } from "react-router-dom"
import * as apiClient from "../apiClient"
import { useQueryClient } from "react-query"

export const Account = () => {

    const queryClient = useQueryClient()

    const handleSignout = async () => {
        await apiClient.logoutUser()
        queryClient.invalidateQueries("validate_token")
    }

    return(
       <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className="rounded-full p-2">
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="space-y-2">
                    <DropdownMenuItem>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button onClick={handleSignout}>
                            Sign out
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
       </DropdownMenu>
    )
}