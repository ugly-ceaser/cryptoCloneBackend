const {getAllUsers,
    updateUserProfit,
    getTotalNumberOfUsers,
    deleteUserByUserId,
    adminLogin} = require('../controller/admin.controller');

const {getTotalDeposit,
    handleDeposit,
    depositUser,
    fetchAllDeposits} = require('../controller/adminDeposit.controller');

    const router = require('express').Router();

    router.post('/',adminLogin); //dffg
    router.get('/Users',getAllUsers); //used
    router.post('/updateProfit',updateUserProfit)
    router.get('/deleteUser/:userId',deleteUserByUserId) //used
    router.get('/getAllUsers',getTotalNumberOfUsers) //used
    router.get('/handleDeposit/:id/:status',handleDeposit) //used






    router.get('/totalDeposit',getTotalDeposit) //used
    router.put('/handleDeposit/${depositId}/${status}',handleDeposit)
    router.get('/getAllDeposits',fetchAllDeposits) //used

    router.post('/deposit',depositUser)



    module.exports = router
