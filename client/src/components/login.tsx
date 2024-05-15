import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"

type LoginProps = {
    trigger: string
}

export const Login = ({trigger}: LoginProps) => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <button className="rounded-full py-2 px-4 hover:bg-gray-300 hover:bg-opacity-15 transition-all ease-in-out">{trigger}</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">Log in to vacay</DialogTitle>
                </DialogHeader>
                <div>
                    <form className="flex flex-col gap-3">
                        <Input placeholder="Email"/>
                        <Input placeholder="Passwod" type="password"/>
                        <Button className="mt-1">Log in</Button>
                    </form>
                </div>
                <DialogFooter>
                    <Button variant="link" className="w-full">
                        New here?
                        {/* TODO: Open signup on click and close the login dialog simultaneously */}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}