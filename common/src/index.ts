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

export const HotelZodSchema = z.object({
    userId: z.string(),
    name: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    description: z.string().min(50),
    type: z.string().min(1),
    adultCount: z.number().min(1),
    childCount: z.number(),
    pricePerNight: z.number().min(1),
    starRating: z.number().min(1).max(5),
    lastUpdated: z.date(),
    facilities: z.array(z.string()).min(1),
    imageUrls: z.array(z.string()).min(1).max(6)
})

export type HotelModelType = {
    _id: string
    userId: string
    name: string
    city: string
    country: string
    description: string
    type: string
    adultCount: number
    childCount: number
    pricePerNight: number
    starRating: number
    lastUpdated: Date
    facilities: string[]
    imageUrls: string[]
}