const mongoose = require('mongoose');



const withdrawalSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        amount:{
            type: String,
            required:[ true,"   please specify a Phone number"]
        },
        status:{
            type: String,
            default: "pending"
        },
        requestDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }       
)


const withdrawal = mongoose.model('withdrawal', withdrawalSchema) 

module.exports = withdrawal