import React, { createContext, useContext } from "react"
import { useQuery } from "react-query"
import * as apiClient from "../apiClient"

type appContext = {
    isLoggedIn: boolean,
}

const AppContext = createContext<appContext | undefined>(undefined)

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {

    const { isError } = useQuery("validate_token", apiClient.validateToken, {
        retry: false
    })

    return(
        <AppContext.Provider value={{ isLoggedIn: !isError }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context as appContext
}