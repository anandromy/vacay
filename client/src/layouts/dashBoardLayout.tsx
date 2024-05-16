import { DashBoardHeader } from "@/components/dashboard/dashBoardHeader"
import { DashBoardSidebar } from "@/components/dashboard/sideBar"
import React from "react"

export const DashBoardLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="min-h-screen flex flex-col">
            <DashBoardHeader />
            <DashBoardSidebar />
            <main className="mx-auto w-full py-6 px-6 lg:pl-[280px] lg:pr-6 flex-1 flex flex-col">
                {children}
            </main>
        </div> 
    )
}