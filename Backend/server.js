import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import cloudinary from "cloudinary";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import skillRouter from "./routes/skill.route.js";
import timelineRouter from "./routes/timeline.route.js";

const app = express();

connectDB();

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/skill", skillRouter);
// app.use("/api/v1/softwareapplication", softwareApplicationRouter);
// app.use("/api/v1/project", projectRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello this is backend of Chirag Project</h1>");
});

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
