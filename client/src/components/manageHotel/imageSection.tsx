import { useFormContext } from "react-hook-form"
import { Input } from "../ui/input"
import z from "zod"
import { createNewHotelForm } from "@/types/hotel"

export const ImageSection = () => {
    const { register, formState: { errors }} = useFormContext<z.infer<typeof createNewHotelForm>>()

    return(
       <div>
            <h2 className="text-2xl font-bold mt-10 mb-5">Images</h2>
            <Input type="file" multiple={true} className="cursor-pointer" {...register("imageFiles")} />
            {
                errors.imageFiles && (
                    <span className="text-destructive font-semibold text-sm">Upload atleast one image</span>
                )
            }
       </div>
    )
}