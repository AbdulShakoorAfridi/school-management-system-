import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import path from "node:path";
dotenv.config();
import cors from "cors";
import { connectDB } from "./config/connection.js";
import { globalErrorHandlingMiddleware } from "./middlewares/globalErrorHandlingMiddleware.js";

const app = express();
// port
const port = process.env.PORT || 3000;
// middlewares
app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// connection to database
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.all("*", (req, res, next) => {
//   const err = new Error(`Not found - ${req.originalUrl}`);
//   err.statusCode = 404;
//   err.status = "fail";
//   next(err);
// });

app.use(globalErrorHandlingMiddleware);
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
