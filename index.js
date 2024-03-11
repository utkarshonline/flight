// app.js
const express = require("express");
const mongoose = require("mongoose");
const { connection } = require("./db");
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/flights", flightRoutes);
// app.use("/api/bookings", authMiddleware, bookingRoutes);

app.listen(8080, async () => {
  try {
    await connection, console.log("connected to db");
    console.log("server is running at port 8080");
  } catch (err) {
    console.log(err);
  }
});
