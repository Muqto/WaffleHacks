import mongoose from "mongoose";

export const restaurantSchema = new mongoose.Schema({
    restaurantUserId: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    }
    
})
