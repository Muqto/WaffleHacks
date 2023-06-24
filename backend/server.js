import express from "express";
import mongoose from "mongoose";
import { customerLogin, customerSignup, getAllCustomers, subscribe } from "./service/customer.js";
import { ownerLogin, ownerSignup, getAllRestaurants, modifyPoints } from "./service/owner.js";
import { getAllReviews, postReview } from "./service/reviews.js";

import cors from "cors";
import * as dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit:"30mb", exptended : true}))
app.use(express.urlencoded({limit:"30mb", exptended : true}))
//customers controller
app.post("/customer/login", customerLogin)
app.post("/customer/signup", customerSignup)
app.get("/customer/customers", getAllCustomers)
app.post("/customer/subscribe", subscribe)

//owner controller
app.post("/owner/login", ownerLogin)
app.post("/owner/signup", ownerSignup)
app.get("/owner/restaurants", getAllRestaurants)
app.post("/owner/points", modifyPoints)

//Review Controller
app.get("/review/reviews", getAllReviews )
app.post("/review/post", postReview)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = "mongodb+srv://Muqto:password14@mern.gxlwzwq.mongodb.net/WaffleHacks?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Connected to port: ${PORT}`)}))
.catch((err) => console.log(`Error is: ${err}`));