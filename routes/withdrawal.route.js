const { withdrawalHandler, getAllWithdrawals, getTotalWithdrawal } = require('../controller/withdrawal.controller');

const router = require('express').Router();

router.post('/', withdrawalHandler);
router.get('/proceed', getAllWithdrawals); //used 
router.get('/total/:userId', getTotalWithdrawal); 

module.exports = router;
