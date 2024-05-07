import { MapPinIcon, SearchIcon, CalendarCheckIcon, FlagIcon } from "lucide-react"
export const Search = () => {
    return(
        <div className="flex items-center p-3 rounded-full border justify-between">
            <div className="flex gap-3">
                <div className="p-3 border rounded-full">
                    <MapPinIcon />
                </div>
                <div>
                    <p className="font-medium">Where</p>
                    <span className="text-gray-500">Search destinations</span>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="p-3 border rounded-full">
                    <CalendarCheckIcon />
                </div>
                <div>
                    <p className="font-medium">When</p>
                    <span className="text-gray-500">Add dates</span>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="p-3 border rounded-full">
                    <FlagIcon />
                </div>
                <div>
                    <p className="font-medium">Tour Type</p>
                    <span className="text-gray-500">All tour</span>
                </div>
            </div>
            <button className="bg-[#4A43C4] p-4 rounded-full hover:bg-[#05073C]">
                <SearchIcon color="white"/>
            </button>
        </div>
    )
}