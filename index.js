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
  try {
    const response = {
      email: process.env.EMAIL,
      current_datetime: new Date().toISOString(), 
      github_url: process.env.GITHUB_URL 
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
