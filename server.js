const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

// passport import
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT||3000;

// Middleware Function--
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next(); // in middleware we have to always call next function. Move on to the next phase
}

app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})


app.get('/',logRequest, function (req, res) {
  res.send('Welcome to my Hotel !');
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
    console.log("Listning on port 3000");
} )
// 3000 is the port , that means room number for the server