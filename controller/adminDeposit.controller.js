const depositModel = require('../model/depositModel');

const fetchAllDeposits = async (req, res) => {
    try {
      const deposits = await depositModel.find();
      res.status(200).json({
        success: true,
        deposits,
      });
    } catch (error) {
      console.error('Error while fetching all deposits:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };

  const getTotalDeposit = async (req, res) => {
    try {
      // Fetch all deposits with 'approved' status
      const deposits = await depositModel.find({ status: 'approved' });
  
      // Calculate the total amount of all approved deposits
      let totalAmount = 0;
      deposits.forEach((deposit) => {
        totalAmount += parseFloat(deposit.amount);
      });
  
      res.status(200).json({
        success: true,
        totalAmount,
      });
    } catch (error) {
      console.error('Error while fetching total deposit:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
  
  
  const handleDeposit = async (req, res) => {
    const transactionId = req.params.transactionId; 
    const status = req.params.status;

    console.log(transactionId);
  
    try {
      const deposit = await depositModel.findOneAndUpdate(
        { transactionId }, // Use transactionId to find the document
        { $set: { status } },
        { new: true }
      );
  
      if (!deposit) {
        return res.status(404).json({
          success: false,
          message: 'Deposit not found',
        });
      }
  
      res.status(200).json({
        success: true,
        message: `Deposit ${status === 'approved' ? 'approved' : 'declined'} successfully`,
        data: deposit,
      });
    } catch (error) {
      console.error('Error while handling deposit:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
  

  const depositUser = async (req, res) => {
    try {
      const depositObject = req.body;
  
      let Data = {}; // Initialize the Data object
      Data.userId = depositObject.userId;
      Data.amount = depositObject.amount;
      Data.transactionId = depositObject.transactionId;
      Data.package = depositObject.package  
  
      const deposit = await depositModel.create(Data);
  
      const id = Data.userId;
      const updatedUser = await userModel.findOneAndUpdate(
        { userId: id }, // Use _id instead of id
        { $set: { package: Data.package } }, // Update the user package data
        { new: true }
      );
  
      res.status(201).json({
        success: true,
        data: {
          deposit,
          updatedUser, // Include the updated user in the response
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


  module.exports ={
    getTotalDeposit,
    handleDeposit,
    depositUser,
    fetchAllDeposits
  }

