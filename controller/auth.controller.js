const userModel = require('../model/userModel')
const depositModel = require('../model/depositModel')

const { v4: uuidv4 } = require('uuid');


function generateUserId() {
  console.log(uuidv4());
return uuidv4(); // Generate a random UUID (Universally Unique Identifier)
}





const initialUserCreation = async (req, res) => {
  try {
    var  user = req.body;
    
    user.userId = generateUserId()
  
    req.session.user = user;

    console.log(req.session.user);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const handleSignUp = async (req, res) => {
  try {
    var  user = req.body;
    
    user.userId = generateUserId()
  
    const createdUser = await userModel.create(user);
    res.status(201).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const initialDeposit = async (req, res) => {
  try {
    const depositDetails = req.body;
    
    // depositDetails.userId = userId;
    const deposit = await depositModel.create(depositDetails);
    res.status(201).json({
      success: true,
      data: deposit,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginHandler = async (req, res) => {
  
  const userDetails = req.body;
  console.log("POST [USER]:", userDetails)

  try {
    
    const user = await userModel.findOne({ email: userDetails.email });

    if (!user) {
      // User with the provided username not found
      return res.status(404).json({ 
        success: false,
        message: 'User does not exist' 
      });
    }

   
    const isPasswordValid = userDetails.password === user.password
    if (!isPasswordValid) {
     
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    const userDisability = userDetails.status

    if(userDisability == 'disabled') {

      return res.status(404).json({ 
        success: false,
        message: 'Registration pending' 
      });

    }

   
    req.session.user = {
      id: user._id,
      username: user.username,
      userId: user.userId
    };

   
    res.status(200).json({ 
      success: true, 
      data: user,
      message: 'Login successful' 
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ 
      success: false,
      message: 'Internal server error' 
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find({})
    res.send(users)
  } catch (error) {
    res.send({ error: error.message })
  }
}

module.exports = {
  handleSignUp,
  initialDeposit,
  initialUserCreation,
  loginHandler,
  getUsers
};
