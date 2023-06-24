import axios from "axios";
// require("dotenv").config();

const API = axios.create({ baseURL: "http://localhost:6006/" });

export const fetchRestaurants = () => API.get("/owner/restaurants");
