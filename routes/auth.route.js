const { handleSignUp,initialUserCreation,loginHandler, initialDeposit } = require('../controller/auth.controller');

const router = require('express').Router();

router.post('/login', loginHandler)

router.post('/register',initialUserCreation) //used
router.post('/proceed', initialDeposit) //used
router.post('/complete', handleSignUp) //used





module.exports = router