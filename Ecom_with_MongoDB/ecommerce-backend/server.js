import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const mongoUri = process.env.MONGO_URI;

//  Start server even if MongoDB is not connected
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

// If no Mongo URI, skip DB connection
if (!mongoUri) {
  console.warn("⚠ No MongoDB URI provided. Skipping database connection...");
  startServer();
} else {
  mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected");
      startServer();
    })
    .catch(err => {
      console.error("MongoDB connection failed:", err.message);
      console.warn("Starting server without database...");
      startServer();
    });
}