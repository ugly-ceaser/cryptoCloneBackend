const express = require('express');
const multer = require('multer');
const dbConnect = require('./controller/Connect');
const session = require('express-session');
const cors = require('cors'); // Added the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET || 'dlwkdnkcwednacnweodj83842efnckd';

// MIDDLEWARES
const allowedOrigins = [
  'https://bitboycryptochannel.com',

];

// Use CORS middleware with the allowed origins
app.use(cors({ origin: allowedOrigins }));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to false for development on HTTP
}));

// ROUTES
const allRoutes = require('./routes'); 
app.use('/api/v1', allRoutes);

dbConnect(() => {
  app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
});
