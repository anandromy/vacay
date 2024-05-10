import { z } from 'zod'

export type UserType = {
    _id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(1),
    lastName: z.string().min(1)
})