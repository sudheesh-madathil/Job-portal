const emRegister = require("../../models/employer/EMRegistrationSchema");

// POST method to register a new employer
exports.post = async (req, res) => {
  const {
    companyName,
    companyLogo,
    industry,
    companySize,
    companyWebsite,
    yearEstablished,
    contactName,
    contactEmail,
    contactPhone,
    address,
    city,
    state,
    country,
    postalCode,
    username,
    password,
    linkedin,
    twitter,
    facebook
  } = req.body;

  try {
    const employerRegister = new emRegister({
      companyName,
      companyLogo,
      industry,
      companySize,
      companyWebsite,
      yearEstablished,
      contactName,
      contactEmail,
      contactPhone,
      address,
      city,
      state,
      country,
      postalCode,
      username,
      password,
      linkedin,
      twitter,
      facebook
    });

    await employerRegister.save();
    res.status(201).json({ message: 'Employer registered successfully', employerRegister });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET method to fetch all employers
exports.get = async (req, res) => {
  try {
    const employers = await emRegister.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET method to fetch a single employer by ID
exports.getById = async (req, res) => {
  const { id } = req.params; // Assuming id is passed as a URL parameter
  console.log(id,"jjjjjjjj");

  try {
    const employer = await emRegister.findById(id);
    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//delete company 

exports.delete = async(req,res)=>{
  const {id} = req.params;
  try {
    const deletecompany = await emRegister.findByIdAndDelete(id);
    if(!deletecompany){
      return res.status(400).json({message:"company not found"})
    }
    res.status(200).json({message:"company deleted successfully"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }

}