import { useFormContext } from "react-hook-form"
import { Input } from "../ui/input"
import { z } from "zod"
import { createNewHotelForm } from "@/types/hotel"

export const GuestsSection = () => {
    const { register, formState: { errors }} = useFormContext<z.infer<typeof createNewHotelForm>>()
    return(
       <div>
        <h2 className="text-2xl font-bold mb-5 mt-10">Guests</h2>
         <div className="bg-muted flex items-center px-6 py-4 justify-between gap-6 rounded">
            <label className="font-semibold w-full">
                Adult Count
                <Input type="number" {...register("adultCount")} className="mt-1" min={1} />
                {errors.adultCount && (
                    <span className="text-sm text-destructive">Adult count shouldn't be less than 1</span>
                )}
            </label>
            <label className="font-semibold w-full">
                Child Count
                <Input type="number" {...register("childCount")} className="mt-1" min={0} />
                {errors.childCount && (
                    <span className="text-sm text-destructive invisible">Child count can be zero</span>
                )}
            </label>
        </div>
       </div>
    )
}