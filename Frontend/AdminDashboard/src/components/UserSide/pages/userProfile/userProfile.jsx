import { useState, useEffect } from "react";
import { UserNavbar } from "../navbar/UserNavbar";
import "./userProfile.css";
import axios from "axios";
import {  useParams } from "react-router-dom";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/UserRegister/${id}`);
        setUserProfile(response.data);
    
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleSave = async () => {
    try {
      alert("saved")
      const response = await axios.put(`http://localhost:3000/UserRegister/${id}`, userProfile);
      setUserProfile(response.data.updatedUser);
      setEditMode(false);

    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="userProfileContainer">
        {userProfile ? (
          <div className="userProfile">

            {editMode ? (
              <div className="userprofilelist">
                <label>
                  Name:
                  <input
                    type="text"
                    name="fullName"
                    value={userProfile.fullName}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phoneNumber"
                    value={userProfile.phoneNumber}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={userProfile.address}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Date of Birth:
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={userProfile.dateOfBirth.split('T')[0]}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Gender:
                  <input
                    type="text"
                    name="gender"
                    value={userProfile.gender}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Professional Title:
                  <input
                    type="text"
                    name="professionalTitle"
                    value={userProfile.professionalTitle}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Current Employer:
                  <input
                    type="text"
                    name="currentEmployer"
                    value={userProfile.currentEmployer}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Current Job Title:
                  <input
                    type="text"
                    name="currentJobTitle"
                    value={userProfile.currentJobTitle}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Experience Level:
                  <input
                    type="text"
                    name="experienceLevel"
                    value={userProfile.experienceLevel}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Industry:
                  <input
                    type="text"
                    name="industry"
                    value={userProfile.industry}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Skills:
                  <input
                    type="text"
                    name="skills"
                    value={userProfile.skills}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Resume:
                  <input
                    type="text"
                    name="resume"
                    value={userProfile.resume}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  LinkedIn:
                  <input
                    type="text"
                    name="linkedIn"
                    value={userProfile.linkedIn}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  GitHub:
                  <input
                    type="text"
                    name="github"
                    value={userProfile.github}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Portfolio:
                  <input
                    type="text"
                    name="portfolio"
                    value={userProfile.portfolio}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Education:
                  <input
                    type="text"
                    name="education"
                    value={userProfile.education}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Certifications:
                  <input
                    type="text"
                    name="certifications"
                    value={userProfile.certifications}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Preferred Locations:
                  <input
                    type="text"
                    name="preferredLocations"
                    value={userProfile.preferredLocations}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Work Authorization:
                  <input
                    type="text"
                    name="workAuthorization"
                    value={userProfile.workAuthorization}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Start Date:
                  <input
                    type="date"
                    name="startDate"
                    value={userProfile.startDate}
                    onChange={handleChange}
                  />
                </label>
                <div className="userbutton">
                <button className="usersavebtn" onClick={handleSave}>Save</button>
                <button className="usercancelBtn" onClick={() => setEditMode(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="userprofilelist1">
                <p><strong>Name:</strong> {userProfile.fullName}</p>
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Phone:</strong> {userProfile.phoneNumber}</p>
                <p><strong>Address:</strong> {userProfile.address}</p>
                <p><strong>Date of Birth:</strong> {userProfile.dateOfBirth.split('T')[0]}</p>
                <p><strong>Gender:</strong> {userProfile.gender}</p>
                <p><strong>Professional Title:</strong> {userProfile.professionalTitle}</p>
                <p><strong>Current Employer:</strong> {userProfile.currentEmployer}</p>
                <p><strong>Current Job Title:</strong> {userProfile.currentJobTitle}</p>
                <p><strong>Experience Level:</strong> {userProfile.experienceLevel}</p>
                <p><strong>Industry:</strong> {userProfile.industry}</p>
                <p><strong>Skills:</strong> {userProfile.skills}</p>
                <p><strong>Resume:</strong> {userProfile.resume}</p>
                <p><strong>LinkedIn:</strong> {userProfile.linkedIn}</p>
                <p><strong>GitHub:</strong> {userProfile.github}</p>
                <p><strong>Portfolio:</strong> {userProfile.portfolio}</p>
                <p><strong>Education:</strong> {userProfile.education}</p>
                <p><strong>Certifications:</strong> {userProfile.certifications}</p>
                <p><strong>Preferred Locations:</strong> {userProfile.preferredLocations}</p>
                <p><strong>Work Authorization:</strong> {userProfile.workAuthorization}</p>
                <p><strong>Start Date:</strong> {userProfile.startDate}</p>
                <button className="userEditBtn" onClick={() => setEditMode(true)}>Edit Profile</button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
    </>
  );
};

export { UserProfile };
