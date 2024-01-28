import { FormProvider, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { createNewHotelForm } from "@/types/hotel"
import { DetailsSection } from "@/components/manageHotel/detailsSection"
import { TypeSection } from "@/components/manageHotel/typeSection"
import { FaciltiesSection } from "@/components/manageHotel/faciltiesSection"
import { GuestsSection } from "@/components/manageHotel/guestsSection"
import { ImageSection } from "@/components/manageHotel/imageSection"


export const ManageHotel = () => {

    const formMethods = useForm<z.infer<typeof createNewHotelForm>>({
        resolver: zodResolver(createNewHotelForm)
    })

    const handleSubmit = formMethods.handleSubmit

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return(
        <div className="flex-1">
            <FormProvider {...formMethods}>
                <form onSubmit={onSubmit}>
                    <DetailsSection />
                    <TypeSection />
                    <FaciltiesSection />
                    <GuestsSection />
                    <ImageSection />
                   <Button type="submit" className="mt-4">
                    Save
                   </Button>
                </form>
            </FormProvider>
        </div>
    )
}