// imports
import dotenv from "dotenv";
import express from "express";
import { mainRouter } from "./api/mainRouter.js";

// variables
dotenv.config();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DBURL || "";
const SECRET = process.env.SECRET || "";

const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to Clean Express 🚅...");
});
app.use(mainRouter)
app.listen(PORT, () => {
    console.log("Server is Started ");
});
