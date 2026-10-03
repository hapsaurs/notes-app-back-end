import 'dotenv/config';

import express from 'express';
import cors from 'cors'; // 1. Impor paket cors
import routes from '../routes/index.js';
import ErrorHandler from '../middlewares/error.js';

const app = express();

// 2. Pasang middleware CORS sebelum parsing JSON dan routing
app.use(cors({
  origin: '*', // Mengizinkan semua origin (cocok untuk tahap pengembangan)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

export default app;