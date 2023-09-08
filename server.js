const express = require('express');
const multer = require('multer');
const dbConnect = require('./controller/Connect');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET || 'dlwkdnkcwednacnweodj83842efnckd';

// MIDDLEWARES
app.use(cors()); // Enable CORS for all origins
app.use(express.json({ limit: '50mb' }));
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
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
});
