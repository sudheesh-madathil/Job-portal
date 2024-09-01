const Register = require("../../models/User/userRegisters");

exports.post = async (req, res) => {
  // Check if file is uploaded
  const resume = req.file ? req.file.path : null;
  console.log("Resume path:", resume);

  // Destructure other fields from req.body
  const {
    fullName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    address,
    dateOfBirth,
    gender,
    professionalTitle,
    currentEmployer,
    currentJobTitle,
    experienceLevel,
    industry,
    skills,
    linkedIn,
    github,
    portfolio,
    education,
    certifications,
    preferredLocations,
    workAuthorization,
    startDate,
  } = req.body;

  console.log("User data:", req.body);
  
  try {
    // Create new user with resume path
    const userRegister = new Register({
      fullName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,
      dateOfBirth,
      gender,
      professionalTitle,
      currentEmployer,
      currentJobTitle,
      experienceLevel,
      industry,
      skills,
      resume, // Add resume path here
      linkedIn,
      github,
      portfolio,
      education,
      certifications,
      preferredLocations,
      workAuthorization,
      startDate,
    });

    // Save user to the database
    await userRegister.save();
    res.status(201).json({ message: "User registered successfully", userRegister });
  } catch (error) {
    console.error("Error during user registration:", error); // Log error details
    res.status(500).json({ message: error.message });
  }
};


exports.get = async (req, res) => {
  try {
    const userRegisters = await Register.find();
    res.status(200).json(userRegisters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const loginUser = await Register.findById(id);
    if (!loginUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT method to update user profile
exports.updateById = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await Register.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete user 

exports.delete = async(req,res)=>{
const {id} = req.params;
const deleteuser = await Register.findByIdAndDelete(id);{
  if(!deleteuser){
    return res.status(404).json({message:"not found user"})
  }
  res.status(200).json({ message:" user data deleted successfully"})
}

  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
}

