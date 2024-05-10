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
