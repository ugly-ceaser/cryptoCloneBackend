const { depositHandler,getAllDeposits,getTotalDeposit } = require('../controller/deposit.controller');

const router = require('express').Router();


router.post('/',depositHandler,) 
router.get('/viewDeposits/:userId', getAllDeposits) //used
router.get('/getTotal/:userId',getTotalDeposit) //used


module.exports = router