import axios from "axios";
// require("dotenv").config();

const API = axios.create({ baseURL: "http://localhost:6006/" });

export const fetchRestaurants = () => API.get("/owner/restaurants");
export const fetchReviews = () => API.get("/review/reviews");
export const addSubscription = (newSubscription) =>
  API.post("/customer/subscribe", newSubscription);
export const addNewReview = (newReview) => API.post("/review/post", newReview);
export const modifyPoints = (customerId, ownerId, points) => API.post("/owner/points", {customerId, ownerId, points})
