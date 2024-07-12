import express, { Application } from 'express';
import studentRoutes from './routes/student.routes';

const app: Application = express();

app.use(express.json());
app.use('/api/students', studentRoutes);

export default app;