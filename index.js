import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/', (req, res) => {
  const response = {
    email: process.env.EMAIL || 'your-email@example.com',
    current_datetime: new Date().toISOString(), // ISO 8601 formatted UTC time
    github_url: process.env.GITHUB_URL
  };

  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
