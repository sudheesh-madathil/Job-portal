const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const User = require("../../models/User/googleAuth"); // Ensure this path is correct
const jwt = require('jsonwebtoken');

const router = express.Router();
const client = new OAuth2Client("1000930394573-7if7r4ms670qggrdk55m6e7nq2o90chs.apps.googleusercontent.com");

// Verify token with Google and create session
router.post("/auth/google", async (req, res) => {
  console.log(req.body, "Received body");
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: "1000930394573-7if7r4ms670qggrdk55m6e7nq2o90chs.apps.googleusercontent.com",
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    // Find or create user in the database
    let user = await User.findOne({ googleId: sub });

    if (!user) {
      user = new User({ googleId: sub, email, name, avatar: picture });
      await user.save();
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send the token and user info to the client
    res.send({ message: "Successfully authenticated", token, user });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).send({ message: "Invalid token" });
  }
});

// Test route for CORS
// Route to fetch all user login data
router.get('/userLoginData/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const loginData = await User.findOne({ googleId: id });
    if (!loginData) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(loginData);
  } catch (error) {
    console.error('Error fetching user login data:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});

// Delete user by Google ID
router.delete('/userLoginData/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ googleId: id });
    if (!deletedUser) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send({ message: 'Internal server error' });
  }
});





module.exports = router;
