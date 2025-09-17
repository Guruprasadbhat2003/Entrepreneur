import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { signup, login } from './authController';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/signup', signup);
app.post('/api/auth/login', login);

mongoose
  .connect('mongodb://localhost:27017/entrepreneur', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
