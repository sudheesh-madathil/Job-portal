import { useNavigate } from "react-router-dom";
import "./EmPostJob.css";
import Swal from 'sweetalert2'
const EmPostJob = () => {

  const navigate = useNavigate()
  const handilJobPost=()=>{

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your job has been posted",
      showConfirmButton: false,
      timer: 3000
    });
    setTimeout(() => {
      navigate("/user/userhome");
    }, 3000); 


  }
  return (
    <>
      <div className="main">
        <div className="jobIteam">
          <div className="title">
     
          </div>
          <div className="jobListMain">
            <div className="EmjobList">
              <div className="jobContainer">
                <div className="jobSection">
                  <h6>Industry Area</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1">IT</option>
                    <option value="option2">Accounts</option>
                    <option value="option3">Marketing</option>
                    <option value="option2">Manager</option>
                    <option value="option3">Banking</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Monthly Salary</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1">5000 - 15000</option>
                    <option value="option2">15000 - 25000 </option>
                    <option value="option3">25000 - 50000</option>
                    <option value="option2"> 50000 - 100000</option>
                    <option value="option3">100000 - 500000</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Qualifications</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor_degree">Bachelors Degree</option>
                    <option value="master_degree">Masters Degree</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Loction</h6>
                  <select>
                    <option value="" disabled>
                      Select a state or union territory
                    </option>
                    <option value="andaman_and_nicobar_islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="andhra_pradesh">Andhra Pradesh</option>
                    <option value="arunachal_pradesh">Arunachal Pradesh</option>
                    <option value="assam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="dadra_and_nagar_haveli_and_daman_and_diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="himachal_pradesh">Himachal Pradesh</option>
                    <option value="jammu_and_kashmir">Jammu and Kashmir</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerala">Kerala</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="lakshadweep">Lakshadweep</option>
                    <option value="madhya_pradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="manipur">Manipur</option>
                    <option value="meghalaya">Meghalaya</option>
                    <option value="mizoram">Mizoram</option>
                    <option value="nagaland">Nagaland</option>
                    <option value="odisha">Odisha</option>
                    <option value="puducherry">Puducherry</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="tamil_nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="tripura">Tripura</option>
                    <option value="uttar_pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="west_bengal">West Bengal</option>
                  </select>
                </div>
              </div>
              <div className="jobContainer">
                <div className="jobSection">
                  <h6>Experience</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1">Fresher</option>
                    <option value="option2">1 year</option>
                    <option value="option3">2 year</option>
                    <option value="option2">3 year</option>
                    <option value="option3">4 year</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Employment Status</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1">permanent</option>
                    <option value="option2">Contract</option>
                    <option value="option3">Freelance</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>positions</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1"> 1</option>
                    <option value="option2"> 2</option>
                    <option value="option3"> 3</option>
                  </select>
                </div>
                <div className="jobSection">
                  <h6>Gender</h6>
                  <select>
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="option1"> Male</option>
                    <option value="option2"> Female</option>
                    <option value="option3"> Any</option>
                  </select>
                </div>
      
              </div>
          
            </div>
            <div className="submitButn">
                <button onClick={handilJobPost}>job post</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { EmPostJob };
