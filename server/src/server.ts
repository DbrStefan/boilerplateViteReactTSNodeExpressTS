import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rută de test
app.get('/', (req, res) => {
  res.json({ message: 'Bine ai venit la API-ul pentru analiza afacerilor!' });
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});

export default app;
