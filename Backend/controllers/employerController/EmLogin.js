var express = require("express");
const emRegister = require("../../models/employer/EMRegistrationSchema")
var router = express.Router();
router.post = async (req, res) => {
    const { username, password } = req.body;

  
    try {
      const employer = await emRegister.findOne({ username });
      if (!employer) {
        return res.status(404).json({ message: 'Invalid credentials' });
      }
  
      if (password !== employer.password) {
        return res.status(404).json({ message: 'Invalid credentials' });
      }
  
      res.json({
        message: 'Login successful',
        id: employer._id,
      
      });
  

    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  module.exports = router;