import express from 'express';
import mongoose from 'mongoose';
import db from './config/database.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/', (_req, res) => {
  res.send({ message: 'OctoFit Tracker API is running.' });
});

app.get('/health', (_req, res) => {
  res.send({ status: 'ok', port });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker backend listening on http://localhost:${port}`);
});
