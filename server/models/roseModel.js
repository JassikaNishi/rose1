const mongoose = require("mongoose")
const roseSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'] },
      password: {
        type: String,
        required: true
      }
    }, { timestamps: true }); 

const roseModel=mongoose.model("rose",roseSchema)
module.exports=roseModel