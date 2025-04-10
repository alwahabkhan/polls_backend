import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './connectDB/db.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Use the authentication routes
app.use('/api/auth', userRouter); 

// DB connection and sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected!");

    // Sync all models (creates tables if they don't exist)
    await UserModel.sync();
    console.log("✅ User model synced!");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
})();

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
