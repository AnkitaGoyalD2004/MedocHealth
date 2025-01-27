import cors from 'cors';
import express from 'express';
import connectDB from '../shared/config/database';
import adminRoutes from './routes/admin';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);

const PORT = process.env.ADMIN_BACKEND_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Admin Backend running on port ${PORT}`);
}); 