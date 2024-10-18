const mongoose = require('mongoose');

// 1.Define the mongoDB connection URI 
const mongoURL = 'mongodb://localhost:27017/hotels' //any name u want at "hotels"

//2. Set up MongoDB connection, must pass these parameters
mongoose.connect(mongoURL, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    
})

// 3. Access the default connection object
// Mongoose maintain a default connection obj representing the mongoose connection
const db = mongoose.connection;

// 4. Define event listeners for database connection
db.on('connected', () => {
    console.log('connected to mongoDB server');
})

db.on('error', (err) => {
    console.log('mongoDB connection error: ',err);
})

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

//Export the database connection 
// db represent MongoDB connection
module.exports = db;
