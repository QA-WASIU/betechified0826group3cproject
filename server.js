import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";    
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

