import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { startKafka } from './config/kafka';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

startKafka().then(() => {
  console.log('Kafka started');
  app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
});
