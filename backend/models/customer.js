import mongoose from "mongoose";
import { restaurantSchema } from "./restaurants.js";

const customerSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    isStudent: Boolean,
    profilePicture: String,
    subscribedRestos: {
        type: [restaurantSchema],
        default: []
    },
    earnedReviewPoints: {
        type: Boolean,
        required: true,
        default: false
    }
    
})

export const Customer = mongoose.model("Customer", customerSchema)

