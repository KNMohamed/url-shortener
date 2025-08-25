import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import * as url from "./controllers/urlController.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

// Middleware
server.use(morgan("dev")); // HTTP request logger

// CORS configuration for Next.js client
server.use(
  cors({
    origin: [CLIENT_URL, "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser()); // Parse cookies

server.set("trust proxy", true);

// Routes
server.get("/", (req, res) => {
  res.json({ message: "Welcome to Express.js server!" });
});

// URL Create Route
server.post("/api/url/submit", url.urlShortener);
// URL redirect route
server.get("/u/:id", url.goToUrl);

// Error handling middleware
server.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
server.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
