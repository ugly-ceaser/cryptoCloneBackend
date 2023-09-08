    const {
        getAllUsers,
        updateUserProfit,
        getTotalNumberOfUsers,
        deleteUserByUserId,
        adminLogin} = require('../controller/admin.controller');

  

    const {
        getTotalDeposit,
        handleDeposit,
        depositUser,
        fetchAllDeposits} = require('../controller/adminDeposit.controller');
        
        
    const {
        handleWithdrawal,
        getTotalWithdrawal,
        fetchAllWithdrawals} = require('../controller/adminWithdrawal.controller');

    const router = require('express').Router();

    router.get('/Users',getAllUsers); //used
    router.post('/updateProfit',updateUserProfit)
    router.get('/getAllUsers',getTotalNumberOfUsers) //used
    router.get('/deleteUser/:userId',deleteUserByUserId) //used
    router.post('/',adminLogin); //dffg
    router.get('/handleDeposit/:transactionId/:status',handleDeposit)
  
    
    
   




    router.get('/totalDeposit',getTotalDeposit) //used
    router.put('/handleDeposit/${depositId}/${status}',handleDeposit)
    router.get('/getAllDeposits',fetchAllDeposits) //used
    router.post('/deposit',depositUser)


    router.get('/handleWithdrawal/:transactionId/:status', handleWithdrawal);
    router.get('/totalWithdrawal', getTotalWithdrawal);
    router.get('/getAllWithdrawals', fetchAllWithdrawals);




    module.exports = router
