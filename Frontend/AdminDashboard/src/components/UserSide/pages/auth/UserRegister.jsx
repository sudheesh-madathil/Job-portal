import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserRegister.css';

function UserRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    professionalTitle: '',
    currentEmployer: '',
    currentJobTitle: '',
    experienceLevel: '',
    industry: '',
    skills: '',
    resume: null,
    linkedIn: '',
    github: '',
    portfolio: '',
    education: '',
    certifications: '',
    preferredLocations: '',
    workAuthorization: '',
    startDate: ''
  });
console.log(formData,"file data resume");
  const userRegisterSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/userRegister', formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      navigate('/user/portalLogin'); // Navigate to login page after successful registration
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Registration failed. Please try again.'); // Show an alert on registration failure
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      resume: e.target.files[0]
    }));
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    await userRegisterSubmit();
  };

  return (
    <div className="usercontainer">
      <div className="register-container">
        {/* <h2>Register</h2> */}
        <form className="usermain">
          <div className="Riteam">
            <div className="Iteams1">
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" onChange={handleChange} value={formData.fullName} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" onChange={handleChange} value={formData.address} required />
              </div>
            </div>
            <div className="Iteam2">
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  onChange={handleChange}
                  value={formData.dateOfBirth}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" onChange={handleChange} value={formData.gender} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="professionalTitle">Professional Title:</label>
                <input
                  type="text"
                  id="professionalTitle"
                  name="professionalTitle"
                  onChange={handleChange}
                  value={formData.professionalTitle}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentEmployer">Current Employer:</label>
                <input
                  type="text"
                  id="currentEmployer"
                  name="currentEmployer"
                  onChange={handleChange}
                  value={formData.currentEmployer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentJobTitle">Current Job Title:</label>
                <input
                  type="text"
                  id="currentJobTitle"
                  name="currentJobTitle"
                  onChange={handleChange}
                  value={formData.currentJobTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="experienceLevel">Experience Level:</label>
                <select id="experienceLevel" name="experienceLevel" onChange={handleChange} value={formData.experienceLevel} required>
                  <option value="">Select Experience Level</option>
                  <option value="entry">Entry-level</option>
                  <option value="mid">Mid-level</option>
                  <option value="senior">Senior-level</option>
                </select>
              </div>
            </div>
          </div>

          <div className="RList">
            <div className="List1">
              <div className="form-group">
                <label htmlFor="industry">Industry:</label>
                <input type="text" id="industry" name="industry" onChange={handleChange} value={formData.industry} required />
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills:</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  placeholder="e.g., JavaScript, React, Node.js"
                  onChange={handleChange}
                  value={formData.skills}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Upload Resume:</label>
                <input type="file" id="resume" name="resume" onChange={handleFileChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="linkedIn">LinkedIn Profile URL:</label>
                <input type="url" id="linkedIn" name="linkedIn" onChange={handleChange} value={formData.linkedIn} />
              </div>
              <div className="form-group">
                <label htmlFor="github">GitHub Profile URL:</label>
                <input type="url" id="github" name="github" onChange={handleChange} value={formData.github} />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">
                  Personal Website/Portfolio URL:
                </label>
                <input type="url" id="portfolio" name="portfolio" onChange={handleChange} value={formData.portfolio} />
              </div>
            </div>
            <div className="List2">
              <div className="form-group">
                <label htmlFor="education">Education:</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  placeholder="Degree, Institution, Year of Graduation"
                  onChange={handleChange}
                  value={formData.education}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="certifications">Certifications:</label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  placeholder="Certification Name, Year"
                  onChange={handleChange}
                  value={formData.certifications}
                />
              </div>
       
              <div className="form-group">
                <label htmlFor="preferredLocations">
                  Preferred Job Locations:
                </label>
                <input
                  type="text"
                  id="preferredLocations"
                  name="preferredLocations"
                  placeholder="e.g., New York, San Francisco"
                  onChange={handleChange}
                  value={formData.preferredLocations}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="workAuthorization">
                  Work Authorization Status:
                </label>
                <select
                  id="workAuthorization"
                  name="workAuthorization"
                  onChange={handleChange}
                  value={formData.workAuthorization}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="citizen">Citizen</option>
                  <option value="permanentResident">Permanent Resident</option>
                  <option value="workVisa">Work Visa</option>
                  <option value="studentVisa">Student Visa</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Available Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  onChange={handleChange}
                  value={formData.startDate}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button onClick={handleRegisterClick} className="UserRegisterbtn">
        Register
      </button>
    </div>
  );
}

export { UserRegister };
