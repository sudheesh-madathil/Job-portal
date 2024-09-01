// src/UserJobApplication.js


import './UserJobApplication.css';

const userData = {
  _id: "6681065c1193e72e8075e89a",
  fullName: "sudheesh",
  email: "sudhi@gmail.com",
  phoneNumber: "9746693668",
  address: "malappuram",
  dateOfBirth: "2087-11-05",
  gender: "male",
  professionalTitle: "developer",
  currentEmployer: "no",
  currentJobTitle: "developer",
  experienceLevel: "mid",
  industry: "it",
  skills: "React",
  resume: "resume",
  linkedIn: "linkedIn",
  github: "github",
  portfolio: "profile",
  education: "diploma",
  certifications: "certifications",
  preferredLocations: "india",
  workAuthorization: "citizen",
  startDate: "2345-09-23"
};

const UserJobApplication = () => {
  return (
    <>
      <div className="jobApplication">
        <div className="JobImg">
          {/* Placeholder for Job Image */}
        </div>
        <div className="JobItem">
          <h2>Job Application Details</h2>
          {Object.keys(userData).map((key) => (
            <div key={key} className="form-group">
              <label>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                <span>{userData[key]}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { UserJobApplication };
