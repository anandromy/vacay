import React from "react"
import { Header } from "./header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="max-w-[85rem] mx-auto w-full p-6 flex-1 flex flex-col">
                {children}
            </main>
    </div> 
    )
}