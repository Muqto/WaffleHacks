import mongoose from "mongoose";
import { Restaurant } from "./restaurants.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    profilePicture: String,
    subscribedRestos: {
        type: [Restaurant],
        required: false
    },
    earnedReviewPoints: {
        type: Boolean,
        required: false
    }
    
})

export const User = mongoose.model("User", userSchema)

