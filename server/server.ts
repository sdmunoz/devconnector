import express from 'express';
import connectDB from '../../devconnector/config/db.js';
import mainRoutes from './routes/api/index';

const app = express();

// connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Main Route
app.use('/', mainRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
