
import { useState } from "react";
import axios from "axios";
import "../../Employer/auth/EmployerRegister.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const EmployerRegister = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyName: "",
    companyLogo: "",

    industry: "",
    companySize: "",
    companyWebsite: "",
    yearEstablished: "",
    contactName: "",

    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    username: "",
    password: "",
    confirmPassword: "",
    linkedin: "",
    twitter: "",
    facebook: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (
        formData[key] === "" &&
        key !== "companyLogo" &&
        key !== "companyDescription" &&
        key !== "companyWebsite" &&
        key !== "yearEstablished" &&
        key !== "linkedin" &&
        key !== "twitter" &&
        key !== "facebook" &&
        key !== "companyCulture" &&
        key !== "keyAchievements" &&
        key !== "careerOpportunities" &&
        key !== "benefitsOffered"
      ) {
   



        Swal.fire({
          title: "<strong> please <u> fill the</u></strong>",
          icon: "info",
          html: 
             ` ${key
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()} field
         
          `,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
          `,
          cancelButtonAriaLabel: "Thumbs down"
        });
        return false;
      }
    }
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!!",
        footer: '<a href="#"> please check your password?</a>',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }



    try {
      const response = await axios.post(
        "http://localhost:3000/Emregister",
        formData
      );
      console.log("Form Data Submitted: ", response.data);
      Swal.fire({
        title: "Registration Successful!",
        text: "You have successfully registered.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000
      });
      setTimeout(() => {
        navigate("/Employer/Login");
      }, 3000); 
      
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("Username already exists. Please change your username.");
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Employer Registration</h2>
        <form>
          {/* Basic Information */}
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Logo URL</label>
            <input
              type="url"
              name="companyLogo"
              value={formData.companyLogo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Size</label>
            <input
              type="number"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Website</label>
            <input
              type="url"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Year Established</label>
            <input
              type="number"
              name="yearEstablished"
              value={formData.yearEstablished}
              onChange={handleChange}
            />
          </div>

          {/* Contact Information */}
          <div className="form-group">
            <label>Contact Person Name</label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact Phone</label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location Information */}
          <div className="form-group">
            <label>Headquarters Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State/Province</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Account Information */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional Details */}
          <div className="form-group">
            <label>LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Facebook</label>
            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
            />
          </div>

          

          <button className="RegisterBtn" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </>
  );
};


export { EmployerRegister };
