import { z } from 'zod';
export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};
export declare const UserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}>;
export declare const HotelZodSchema: z.ZodObject<{
    userId: z.ZodString;
    name: z.ZodString;
    city: z.ZodString;
    country: z.ZodString;
    description: z.ZodString;
    type: z.ZodString;
    adultCount: z.ZodNumber;
    childCount: z.ZodNumber;
    pricePerNight: z.ZodNumber;
    starRating: z.ZodNumber;
    lastUpdated: z.ZodDate;
    facilities: z.ZodArray<z.ZodString, "many">;
    imageUrls: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: string;
    userId: string;
    name: string;
    city: string;
    country: string;
    description: string;
    adultCount: number;
    childCount: number;
    pricePerNight: number;
    starRating: number;
    lastUpdated: Date;
    facilities: string[];
    imageUrls: string[];
}, {
    type: string;
    userId: string;
    name: string;
    city: string;
    country: string;
    description: string;
    adultCount: number;
    childCount: number;
    pricePerNight: number;
    starRating: number;
    lastUpdated: Date;
    facilities: string[];
    imageUrls: string[];
}>;
export type HotelModelType = {
    _id: string;
    userId: string;
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    adultCount: number;
    childCount: number;
    pricePerNight: number;
    starRating: number;
    lastUpdated: Date;
    facilities: string[];
    imageUrls: string[];
};
