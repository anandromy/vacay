import { DashBoardLayout } from "@/layouts/dashBoardLayout"
import { Outlet } from "react-router-dom"

export const DashboardHome = () => {
    return(
        <DashBoardLayout>
            <Outlet />
        </DashBoardLayout>
    )
}