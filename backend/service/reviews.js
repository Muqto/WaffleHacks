import { Customer } from "../models/customer.js"
import { Review } from "../models/reviews.js"

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find() 
        res.status(200).json(reviews)
    } catch (error) {
        res.status(404).json({message: "Could not fetch reviews"})
    }
}
export const postReview = async (req, res) => {
    const {reviewerId, restaurantId, reviewText, stars} = req.body
    const newReview = new Review({reviewerId, restaurantId, reviewText, stars})
    try {
        await newReview.save()
        const customer = await Customer.findById(reviewerId)
        customer.earnedReviewPoints = true
        const updatedCustomer = await Customer.findByIdAndUpdate(reviewerId, customer, {new: true})
        res.status(201).json({newReview, updatedCustomer})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
