import { hotelFacilities } from "@/config/hotel"
import { createNewHotelForm } from "@/types/hotel"
import { useFormContext } from "react-hook-form"
import z from "zod"

export const FaciltiesSection = () => {
    const { register, formState: { errors }} = useFormContext<z.infer<typeof createNewHotelForm>>()
    return(
        <div>
            <h2 className="text-2xl font-bold mb-5 mt-10">Facilities</h2>
           <div className="grid grid-cols-5 gap-5">
                {
                    hotelFacilities.map((facility) => (
                        <label>
                            <input type="checkbox" value={facility} className="mr-1" {...register("facilities", {
                                validate: (facilities) => {
                                    if(facilities.length === 0){
                                        return "Add alteast one facility"
                                    }
                                    return true
                                }
                            })} />
                            {facility}
                        </label>
                    ))
                }       
           </div>
           {errors.facilities && (
                <span className="text-sm text-destructive font-semibold">Add alteast one facility</span>
            )}
        </div>
    )
}