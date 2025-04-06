import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Auth Service running at http://localhost:${PORT}`);
});
