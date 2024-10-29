import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import listingRouter from './routes/listing.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://real-estate-mern-frontend-one.vercel.app/','http://localhost:3000'], 
  credentials: true,
  optionsSuccessStatus: 200, 
}));

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://shafiqurrehmanbscs2022:101325Sh@cluster0.vaqvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});