import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogFooter } from "./ui/dialog"
import { Input } from "./ui/input"

export const Signup = () => {

    return(
        <Dialog>
            <DialogTrigger asChild>
                <button className="rounded-full py-2 px-4 hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">Sign up</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">Sign up to vacay</DialogTitle>
                </DialogHeader>
                <div>
                    <form className="flex flex-col gap-3">
                        <Input placeholder="First name"/>
                        <Input placeholder="Last name"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Passwod" type="password"/>
                        <Button className="mt-1">Sign up</Button>
                    </form>
                </div>
                <DialogFooter>
                    <Button className="w-full" variant="link">
                        Already have an account?
                        {/* TODO: Open login on click and close the signup dialog simultaneously */}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}