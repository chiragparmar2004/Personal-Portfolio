import express from "express";
import connectDB from "./config/db.js";

const app = express();

connectDB();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello this is backend of Chirag Project</h1>");
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
