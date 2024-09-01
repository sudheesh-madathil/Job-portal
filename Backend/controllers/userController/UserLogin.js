var express = require("express");
const UserLogin = require("../../models/User/userRegisters")
var router = express.Router();
router.post = async (req, res) => {
    const { password , email } = req.body;
    console.log(req.body,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");

  
    try {
      const jobseekar = await UserLogin.findOne({  email });
      if (!jobseekar) {
        return res.status(404).json({ message: 'Invalid credential' });
      }
  
      if (password !==  jobseekar.password) {
        return res.status(404).json({ message: 'Invalid credentials' });
      }
  
      res.json({
        message: 'Login successful',
        id: jobseekar._id,
      
      });
  

    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  module.exports = router;