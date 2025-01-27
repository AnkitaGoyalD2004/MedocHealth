import cors from 'cors';
import express from 'express';
import connectDB from '../shared/config/database';
import userRoutes from './routes/users';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.USER_BACKEND_PORT || 3000;
app.listen(PORT, () => {
  console.log(`User Backend running on port ${PORT}`);
}); 