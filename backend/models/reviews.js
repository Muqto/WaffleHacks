import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    reviewerId: {
        type: String,
        required: true
    },
    revieweeId: {
        type: String,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    }    
})

export const Review = mongoose.model("Review", reviewSchema)