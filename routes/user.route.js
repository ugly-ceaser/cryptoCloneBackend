const { getUsers } = require('../controller/auth.controller');
const{fetchUserDetails,updateUserDetails} = require('../controller/userProfile.controller');



const router = require('express').Router();





// router.get("/users", getUsers)



router.get('/:userId',fetchUserDetails) // used
router.post('/update',updateUserDetails);


module.exports = router
// `http://localhost:3000/api/v1/users/update`
// `http://localhost:3000/api/v1/users`