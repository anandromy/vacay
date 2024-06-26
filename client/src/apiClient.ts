import { UserSchema } from "common-vacay"
import z from "zod"
import { loginFormData } from "./components/login"

const url = import.meta.env.VITE_API_URL

export const signup = async (formData: z.infer<typeof UserSchema>) => {
    const response = await fetch(`${url}/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
    })
    const responseBody = await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }

    return responseBody
}

export const loginUser = async (formData: z.infer<typeof loginFormData>) => {
    const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
    })
    const responseBody = await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }
    return responseBody
}

export const validateToken = async () => {
    const response = await fetch(`${url}/auth/validate_token`, {
        method: "GET",
        credentials: "include"
    })

    if(!response.ok){
        throw new Error("Invalid token")
    }
}

export const logoutUser = async () => {
    const res = await fetch(`${url}/auth/logout`, {
        method: "GET",
        credentials: "include"
    })

    if(!res.ok){
        throw new Error("Error in logging out")
    }
}