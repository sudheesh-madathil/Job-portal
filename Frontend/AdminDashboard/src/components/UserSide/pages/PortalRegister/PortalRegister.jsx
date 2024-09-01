import  { useState } from "react";
import axios from "axios";
import "./PortalRegister.css";
import { useNavigate } from "react-router-dom";

const PortalRegister = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    age: "",
    dob: "",
    hobbies: "",
    interest: "",
    smokingHabits: "",
    drinkingHabits: "",
    qualification: "",
    profilePic: null,
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0]
    });
  };

  const handilportalregister = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (
      !formData.age ||
      !formData.dob ||
      !formData.hobbies ||
      !formData.interest ||
      !formData.smokingHabits ||
      !formData.drinkingHabits ||
      !formData.qualification ||
      !formData.gender
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // Form data is valid, proceed with Axios POST request
    const data = new FormData();
    data.append("age", formData.age);
    data.append("dob", formData.dob);
    data.append("hobbies", formData.hobbies);
    data.append("interest", formData.interest);
    data.append("smokingHabits", formData.smokingHabits);
    data.append("drinkingHabits", formData.drinkingHabits);
    data.append("qualification", formData.qualification);
    if (formData.profilePic) {
      data.append("profilePic", formData.profilePic);
    }
    data.append("gender", formData.gender);

    axios
      .post("https://your-server-endpoint.com/api/register", data)
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });

      navigate("/user/portalLogin")
  };

  return (
    <>
      <div className="portalRegister">
        <div className="RegisterIteam">
          <form className="RegisterList">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DOB"
            />
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              placeholder="Hobbies"
            />
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder="Interest"
            />

            <div className="IteamList">
              <h6>Smoking Habits</h6>
              <select
                name="smokingHabits"
                value={formData.smokingHabits}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your option
                </option>
                <option value="non-smoker">Non-Smoker</option>
                <option value="occasional-smoker">Occasional Smoker</option>
                <option value="regular-smoker">Regular Smoker</option>
              </select>
            </div>

            <div className="IteamList">
              <h6>Qualification</h6>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your option
                </option>
    
                <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors Degree</option>
                    <option value="Masters">Masters Degree</option>
              
                <option value="regular-drinker">Any</option>
              </select>
            </div>
            <div className="IteamList">
              <h6>Drinking Habits</h6>
              <select
                name="drinkingHabits"
                value={formData.drinkingHabits}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your option
                </option>
                <option value="non-drinker">Non-Drinker</option>
                <option value="occasional-drinker">Occasional Drinker</option>
                <option value="regular-drinker">Regular Drinker</option>
              </select>
            </div>

            <input
              type="file"
              name="profilePic"
              onChange={handleFileChange}
              placeholder="Profile Pic"
            />

            <div className="IteamList">
              <h6>Gender</h6>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button className="portalsubmit" onClick={handilportalregister}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export { PortalRegister };
