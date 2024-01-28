"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelZodSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    firstName: zod_1.z.string().min(1),
    lastName: zod_1.z.string().min(1)
});
exports.HotelZodSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    name: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
    description: zod_1.z.string().min(50),
    type: zod_1.z.string().min(1),
    adultCount: zod_1.z.number().min(1),
    childCount: zod_1.z.number(),
    pricePerNight: zod_1.z.number().min(1),
    starRating: zod_1.z.number().min(1).max(5),
    lastUpdated: zod_1.z.date(),
    facilities: zod_1.z.array(zod_1.z.string()).min(1),
    imageUrls: zod_1.z.array(zod_1.z.string()).min(1).max(6)
});
