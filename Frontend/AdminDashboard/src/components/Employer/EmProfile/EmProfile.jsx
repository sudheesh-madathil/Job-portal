import { useState, useEffect } from "react";
import axios from "axios";
import "./Emprofile.css";
import PropTypes from "prop-types"; // Import PropTypes
const EmProfile = ({ id }) => {
  const [profileData, setProfileData] = useState(null); // Initialize with null for better loading handling

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Emregister/${id}`);

        setProfileData(response.data);
        console.log("Fetched profile data:", response.data); // Log fetched data for debugging
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setProfileData(null); // Clear profileData if error occurs
      }
    };

    if (id) {
      fetchProfileData();
    }
  }, [id]);

  console.log("Profile data state:", profileData); // Log profileData state for debugging

  return (
    <div className="profile-container">
  
      {profileData ? (
        <table className="profile-table">
          <tbody>
            <tr>
              <th>Company Name</th>
              <td>{profileData.companyName}</td>
            </tr>
            <tr>
              <th>Company Logo</th>
              <td><img src={profileData.companyLogo} alt="Company Logo" /></td>
            </tr>
            <tr>
              <th>Industry</th>
              <td>{profileData.industry}</td>
            </tr>
            <tr>
              <th>Company Size</th>
              <td>{profileData.companySize}</td>
            </tr>
            <tr>
              <th>Company Website</th>
              <td>{profileData.companyWebsite}</td>
            </tr>
            <tr>
              <th>Year Established</th>
              <td>{profileData.yearEstablished}</td>
            </tr>
            <tr>
              <th>Contact Name</th>
              <td>{profileData.contactName}</td>
            </tr>
            <tr>
              <th>Contact Email</th>
              <td>{profileData.contactEmail}</td>
            </tr>
            <tr>
              <th>Contact Phone</th>
              <td>{profileData.contactPhone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{profileData.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{profileData.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{profileData.state}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{profileData.country}</td>
            </tr>
            <tr>
              <th>Postal Code</th>
              <td>{profileData.postalCode}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{profileData.username}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{profileData.password}</td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td><a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">{profileData.linkedin}</a></td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td>{profileData.twitter}</td>
            </tr>
            <tr>
              <th>Facebook</th>
              <td>{profileData.facebook}</td>
            </tr>
            <tr>
              <th>Posted At</th>
              <td>{new Date(profileData.postedAt).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};
EmProfile.propTypes = {
   id: PropTypes.string.isRequired, // Add PropTypes validation for id
 };

export { EmProfile };
