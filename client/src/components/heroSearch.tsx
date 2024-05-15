import { MapPinIcon, SearchIcon, CalendarCheckIcon, FlagIcon } from "lucide-react"
export const HeroSearch = () => {
    return(
        <div className="flex flex-col rounded-md md:flex-row items-center md:p-3 md:rounded-full md:justify-between shadow-md w-full bg-secondary text-secondary-foreground">
            <div className="flex gap-3 p-3 md:p-0 border-b md:border-0 w-full">
                <div className="p-3 border rounded-full">
                    <MapPinIcon />
                </div>
                <div>
                    <p className="md:font-medium">Where</p>
                    <span className="text-muted-foreground">Search destinations</span>
                </div>
            </div>
            <div className="flex gap-3 p-3 md:p-0 border-b md:border-0 w-full">
                <div className="p-3 border rounded-full">
                    <CalendarCheckIcon />
                </div>
                <div>
                    <p className="md:font-medium">When</p>
                    <span className="text-muted-foreground">Add dates</span>
                </div>
            </div>
            <div className="flex gap-3 p-3 md:p-0 border-b md:border-0 w-full">
                <div className="p-3 border rounded-full">
                    <FlagIcon />
                </div>
                <div>
                    <p className="md:font-medium">Tour Type</p>
                    <span className="text-muted-foreground">All tour</span>
                </div>
            </div>
            <button className="bg-primary p-4 rounded-b-md md:rounded-full w-full md:w-auto">
                <SearchIcon color="white" className="mx-auto"/>
            </button>
        </div>
    )
}