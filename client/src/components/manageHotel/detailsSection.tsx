import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createNewHotelForm } from "@/types/hotel"
import { useFormContext } from "react-hook-form"
import z from "zod"

export const DetailsSection = () => {
    const {register, formState: {errors}} = useFormContext<z.infer<typeof createNewHotelForm>>()
    return(
        <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-3">Add hotel</h2>
            <label className="font-semibold">
                Name
                <Input {...register("name", {
                    required: "This field is required"
                })} className="mt-1" />
                {errors.name && (
                    <span className="text-sm text-destructive">Enter name of the place</span>
                )}
            </label>
            <div className="flex flex-row items-center gap-6">
                <label className="font-semibold w-full">
                    City
                    <Input {...register("city", {
                        required: "This field is required"
                    })} className="mt-1" />
                    {errors.city && (
                        <span className="text-sm text-destructive">Enter the city</span>
                    )}
                </label>
                
                <label className="font-semibold w-full">
                    Country
                    <Input {...register("country", {
                        required: "This field is required"
                    })} className="mt-1" />
                    {errors.country && (
                        <span className="text-sm text-destructive">Enter the country</span>
                    )}
                </label>
            </div>
            <label className="font-semibold w-full">
                Description
                <Textarea {...register("description", {
                    required: "This field is required"
                })} className="mt-1" />
                {errors.description && (
                    <span className="text-sm text-destructive">Description of atleast 50 characters is required</span>
                )}
            </label>
            <label className="font-semibold w-[35%]">
                Price Per Night
                <Input type="number" min={1} {...register("pricePerNight", {
                    required: "This field is required"
                })} className="mt-1" />
                {errors.pricePerNight && (
                    <span className="text-sm text-destructive">Enter price per night, it shouldn't be 0 or less</span>
                )}
            </label>
            <label className="font-semibold w-[35%]">
                Star Rating
                <Input type="number" min={1} max={5} {...register("starRating", {
                    required: "This field is required"
                })} className="mt-1" />
                {errors.starRating && (
                    <span className="text-sm text-destructive">Enter a rating between 1 and 5</span>
                )}
            </label>
        </div>
    )
}