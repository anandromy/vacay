import { UserSchema } from "common-vacay"
import z from "zod"

export const signup = async (formData: z.infer<typeof UserSchema>) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const responseBody = await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }

    return responseBody
}