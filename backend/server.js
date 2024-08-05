require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 8080;
const corsOptions = {
	origin: ['http://localhost:5173'],
};

connectDB();
app.use(cors(corsOptions));

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/workouts', (req, res) => {
	res.json({ workouts: ['Chest and Back', 'Arms'] });
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
