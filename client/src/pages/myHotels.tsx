import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const MyHotels = () => {
    return(
        <div className="flex-1 flex flex-col">
            <div className="flex justify-end">
                <Button asChild>
                    <Link to="add-hotel">
                        Add hotel
                    </Link>
                </Button>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}