import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';

import connectDB from './mongodb/connectdb.js';
import { PORT } from './config/env.js';

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', async (req, res) => {
  res.send('Welcome from DALL-E!');
});

// server
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`.yellow);
    });
  } catch (err) {
    console.error('Error starting server', err);
  }
};

startServer();
