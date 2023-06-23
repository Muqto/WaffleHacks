import express from "express";
import mongoose from "mongoose";
import { get } from "./service/get.js";
const app = express()

app.get("/get", get)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = "mongodb+srv://Muqto:password14@mern.gxlwzwq.mongodb.net/settingup?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Connected to port: ${PORT}`)}))
.catch((err) => console.log(`Error is: ${err}`));