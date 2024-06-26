// src/app.ts
import express from "express";
import userRouter from "./route/userRouter";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api", userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});