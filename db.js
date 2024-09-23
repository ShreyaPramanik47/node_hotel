const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://127.0.0.1:27017/ai-realestate-friend'
const mongoURL = process.env.MONGODB_URL_LOCAL;
// const mongoURL = process.env.MONGODB_URL;

// Set up Mongodb connection
// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
mongoose.connect(mongoURL)

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db= mongoose.connection;

// define event listener for database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error', (err)=>{
    console.log('MongoDB connection error:',err);
});

db.on('disconnected', ()=>{
    console.log("MongoDB disconnected");
});

// Export the database connection
module.exports= db;