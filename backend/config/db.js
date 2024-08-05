const mongoose = require('mongoose');

// This code connects to MongoDB using the URI specified in the environment variable DB_URI, logging success or error accordingly.
const connectDB = async () => {
	const conn = await mongoose.connect(process.env.DB_URI);
	console.log(`MongoDB Connected ${conn.connection.host}`);
};

module.exports = connectDB;
