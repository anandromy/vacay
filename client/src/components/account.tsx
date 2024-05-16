import { Button } from "./ui/button"

export const Account = () => {

    // TODO: Make Account a dropdown menu with profile, logout, my hotels/admin profile etc.
    return(
       <>
        <Button className="hidden lg:block rounded-lg">Account</Button>
        <Button className="lg:hidden rounded-full">A</Button>
       </>
    )
}