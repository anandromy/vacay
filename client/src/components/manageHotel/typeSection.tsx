import { hotelTypes } from "@/config/hotel"
import { useFormContext } from "react-hook-form"
import { createNewHotelForm } from "@/types/hotel"
import z from "zod"

export const TypeSection = () => {
    const { register, formState: { errors }, watch } = useFormContext<z.infer<typeof createNewHotelForm>>()
    const typeWatch = watch("type")
    return(
        <div>
            <h2 className="text-2xl font-bold mb-5 mt-10">Type</h2>
            <div className="grid grid-cols-5 gap-5">
                {
                    hotelTypes.map((type) => (
                        <label className={`
                            ${typeWatch === type ? "bg-primary py-2 text-center text-primary-foreground rounded-full cursor-pointer" : "bg-muted py-2 text-center rounded-full cursor-pointer"}
                        `}>
                            <input type="radio" {...register("type")} value={type} hidden />
                            {type}
                        </label>
                    ))
                }
            </div>
            {errors.type && (
                <span className="text-sm text-destructive font-semibold">Add type of hotel</span>
            )}
        </div>
    )
}