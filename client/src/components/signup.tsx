import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogHeader, DialogFooter } from "./ui/dialog"
import { Input } from "./ui/input"
import { UserSchema } from "common-vacay"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from "../apiClient"
import { LoaderIcon } from "lucide-react"

export const Signup = () => {
   const queryClient = useQueryClient()

   const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema)
   })

   const { mutate, isLoading } = useMutation(apiClient.signup, {
        onSuccess: () => {
            queryClient.invalidateQueries("validate_token")
        },
        onError: (error: Error) => {
            console.log(error.message)
        }
   })

   const onSubmit = handleSubmit((data) => {
        mutate(data)
   })

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
                    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
                        <Input placeholder="First name" {...register("firstName")} />
                        {errors.firstName && (
                            <span className="text-destructive text-sm">{errors.firstName.message}</span>
                        )}
                        <Input placeholder="Last name" {...register("lastName")} />
                        {errors.lastName && (
                            <span className="text-destructive text-sm">{errors.lastName.message}</span>
                        )}
                        <Input placeholder="Email"{...register("email")} />
                        {errors.email && (
                            <span className="text-destructive text-sm">{errors.email.message}</span>
                        )}
                        <Input placeholder="Passwod" type="password" {...register("password")} />
                        {errors.password && (
                            <span className="text-destructive text-sm">{errors.password.message}</span>
                        )}
                        <Button className="mt-1" disabled={isLoading}>
                            {isLoading ?
                            (
                               <LoaderIcon className="text-muted-foreground h-5 w-5 animate-spin" />
                            )
                            :
                            (
                                "Sign up"
                            ) 
                            }
                        </Button>
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