const { getUsers } = require('../controller/auth.controller');
const{fetchUserDetails,updateUserDetails} = require('../controller/userProfile.controller');



const router = require('express').Router();





// router.get("/users", getUsers)



router.get('/:userId',fetchUserDetails) // used
router.post('/update',updateUserDetails);


module.exports = router
// `https://backendsample.metafinre.com/api/v1/users/update`
// `https://backendsample.metafinre.com/api/v1/users`