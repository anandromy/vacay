import { UserSchema } from "common-vacay"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from "../apiClient"
import { LoaderIcon } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"

type LoginProps = {
    trigger: string
}

export const loginFormData = UserSchema.partial({
    firstName: true,
    lastName: true
})

export const Login = ({trigger}: LoginProps) => {
    const queryClient = useQueryClient()

    const { register, formState, handleSubmit } = useForm<z.infer<typeof loginFormData>>({
        resolver: zodResolver(loginFormData)
    })

    const { mutate, isLoading } = useMutation(apiClient.loginUser, {
        onSuccess: (res) => {
            queryClient.invalidateQueries("validate_token")
            console.log(res.message)
        },
        onError: (err: Error) => {
            console.log(err.message)
        }
    })

    const onSubmit = handleSubmit((data) => {
        mutate(data)
    })

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
                    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                        <Input placeholder="Email" {...register("email")} />
                        {formState.errors.email && (
                            <span className="text-destructive text-sm">{formState.errors.email.message}</span>
                        )}
                        <Input placeholder="Passwod" type="password" {...register("password")} />
                        {formState.errors.password && (
                            <span className="text-destructive text-sm">{formState.errors.password.message}</span>
                        )}
                        <Button className="mt-1" disabled={isLoading}>
                            {isLoading ? (
                                <LoaderIcon className="text-muted-foreground w-5 h-5 animate-spin"/>
                            ): (
                                "Log in"
                            )}
                        </Button>
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