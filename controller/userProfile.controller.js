
const userModel = require('../model/userModel');


const fetchUserDetails = async (req, res) => 
{
    const userId =  req.params.userId ;
    console.log(userId)

    const userDetails = await userModel.findOne({userId})

    console.log(userDetails)

    if(!userDetails){
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    
    }else{
        return res.status(200).json({
            success: true,
            message: userDetails
        })      
}

}

const updateUserDetails = async (req , res) =>
{
userDetails = req.body;

try{
   const userUpdate = await  userModel.update(userDetails)

   return res.status(200).json({
    success: true,
    message :userUpdate
   })
}catch(err){  
    return res.status(500).json({
        success : false,
        message : err.message
  })
}

}



module.exports = {
    updateUserDetails,
    fetchUserDetails,
   
  };

