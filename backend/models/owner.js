import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    userType: String,
    profilePicture: String,
})

export const Owner = mongoose.model("Owner", ownerSchema)