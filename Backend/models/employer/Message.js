const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
   senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"EmployerRegister",
    required:true
   } ,
   receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"UserRegister",
    required:true

   },
   message:{
    type:String,
    required:true
   }
},{timestamps:true});

module.exports = mongoose.model("message",messageSchema);