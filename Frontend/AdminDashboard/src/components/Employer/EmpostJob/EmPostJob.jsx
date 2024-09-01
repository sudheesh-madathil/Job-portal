import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmPostJob.css";
import Swal from 'sweetalert2';
import axios from "axios";

const EmPostJob = () => {

  const {id} = useParams()
  const [companyprofile,setcompanyprofile] =useState([])
  const [formData, setFormData] = useState({
    industryArea: "",
    monthlySalary: "",
    qualifications: "",
    location: "",
    experience: "",
    employmentStatus: "",
    positions: "",
    gender: "",
    companyName: "" 
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      companyName: companyprofile.companyName 

    });
  };


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Emregister/${id}`);
        setcompanyprofile(response.data);
       // Log fetched data for debugging

        // Set companyName in the form data based on the fetched profile data
        setFormData(prevFormData => ({
          ...prevFormData,
          companyName: response.data.companyName || "" // Ensure companyName is set
        }));
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setcompanyprofile(null); // Clear profileData if error occurs
      }
    };

    if (id) {
      fetchProfileData();
    }
  }, [id]);

  console.log("Profile data state:", companyprofile);

  const handleJobPost = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your job has been posted",
      showConfirmButton: false,
      timer: 3000
    });
  
    axios.post(`http://localhost:3000/Employer/${id}`,formData)
      .then(response => {

        console.log("data added",response.data);
        setTimeout(() => {
          navigate(`/Employer/Dashboard/${id}`);
        }, 3000);
      })
      .catch(error => {
        console.error("There was an error posting the job!", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        });
      });
  };
  return (
    <>
      <div className="main">
        <div className="jobIteam">
          <div className="title">
            <h2>Post Job</h2>
          </div>
          <div className="jobListMain">
            <div className="EmjobList">
              <div className="jobContainer">
                <div className="jobSection">
                  <h6>Industry Area</h6>
                  <select name="industryArea" value={formData.industryArea} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="IT">IT</option>
                    <option value="Accounts">Accounts</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Manager">Manager</option>
                    <option value="Banking">Banking</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Monthly Salary</h6>
                  <select name="monthlySalary" value={formData.monthlySalary} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="5000-15000">5000 - 15000</option>
                    <option value="15000-25000">15000 - 25000</option>
                    <option value="25000-50000">25000 - 50000</option>
                    <option value="50000-100000">50000 - 100000</option>
                    <option value="100000-500000">100000 - 500000</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Qualifications</h6>
                  <select name="qualifications" value={formData.qualifications} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors Degree</option>
                    <option value="Masters">Masters Degree</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Location</h6>
                  <select name="location" value={formData.location} onChange={handleInputChange}>
                    <option value="" disabled>Select a state or union territory</option>
                    <option value="Andaman_and_Nicobar_Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra_Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra_and_Nagar_Haveli_and_Daman_and_Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal_Pradesh">Himachal Pradesh</option>
                    <option value="Jammu_and_Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya_Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil_Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar_Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West_Bengal">West Bengal</option>
                  </select>
                </div>
              </div>
              <div className="jobContainer">
                <div className="jobSection">
                  <h6>Experience</h6>
                  <select name="experience" value={formData.experience} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1 year">1 year</option>
                    <option value="2 year">2 year</option>
                    <option value="3 year">3 year</option>
                    <option value="4 year">4 year</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Employment Status</h6>
                  <select name="employmentStatus" value={formData.employmentStatus} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Positions</h6>
                  <select name="positions" value={formData.positions} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Gender</h6>
                  <select name="gender" value={formData.gender} onChange={handleInputChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="submitButn">
              <button onClick={handleJobPost}>Post Job</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EmPostJob };
