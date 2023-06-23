import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantUserId: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
    
})

export const Restaurant = mongoose.model("Restaurant", restaurantSchema)