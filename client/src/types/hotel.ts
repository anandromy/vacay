import z from "zod"

export const createNewHotelForm = z.object({
    name: z.string().min(1),
    city: z.string().min(1),
    country: z.string().min(1),
    description: z.string().min(50),
    pricePerNight: z.string().min(1),
    starRating: z.string().min(1),
    type: z.string().min(1),
    facilities: z.array(z.string()).min(1),
    adultCount: z.string().min(1),
    childCount: z.string(),
    imageFiles: z.instanceof(FileList)
})