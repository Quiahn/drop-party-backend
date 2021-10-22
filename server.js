// import necessary npm packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')

// import routes
const usersRouter = require('./routes/user_routes');

// start an express app obj
const app = express();

// set cors headers on response using cors npm package
app.use(cors())

// define what port to listen to
const port = process.env.PORT || 4000

// add `express.json` middleware which will parse JSON requests into obj before they reach the routes
app.use(express.json());
// parses req sent by ajax which use a different content type
app.use(express.urlencoded({ extended: true }));
// parses cookies and populates req.cookies
app.use(cookieParser());

// use routes
app.use('/user', usersRouter);

// start express app
app.listen(port, () => {
    console.log('listening on port ' + port)
})

module.exports = app