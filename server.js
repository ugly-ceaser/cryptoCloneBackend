const express = require('express');
const multer = require('multer');
const dbConnect = require('./controller/Connect');
const session = require('express-session');
const cors = require('cors'); // Added the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET || 'dlwkdnkcwednacnweodj83842efnckd';

const allowedOrigins = [
  'https://bitboycryptochannel.com',
  'http://localhost:5173'
 
 
];
// MIDDLEWARES
app.use(cors({ origin: allowedOrigins })); // Set the origin to allow requests from 'http://localhost:5173'
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } // Set secure to false for development on HTTP
}));

// ROUTES
const allRoutes = require('./routes'); 
app.use('/api/v1', allRoutes);

dbConnect(() => {
  app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
});
