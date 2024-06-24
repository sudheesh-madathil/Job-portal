import { UserNavbar } from "../navbar/UserNavbar";
import { FaSearch } from "react-icons/fa";

import "./userHome.css";
import { UserFooter } from "../footer/UserFooter";
const UserHome = () => {
  return (
    <>
      <div className="userHomemain">
        <UserNavbar />
        {/* <img src="https://sharjeelanjum.com/html/jobs-portal/images/search-bg.jpg" alt="" /> */}
        <div className="userSearchbar">
          <div className="Ulabel">
            <label htmlFor="">
              <h1>One million success stories</h1>
              <h3>Start yours today</h3>
              <p>Find 40,000+ jobs, Employment & Career Opportunities</p>
            </label>
          </div>
        </div>
        <div className="sticky">
          <div className="searchIteam">
            <div className="searchlist">
              <input placeholder="Enter Skills or job Title" type="text" />
            </div>

            <div className="searchlist">
              <input placeholder="Location" type="text" />
            </div>
            <div className="searchlist">
              <button>
                <FaSearch />
                search
              </button>
            </div>
          </div>
        </div>

       
      
       <div className="jobDetails">
          <div className="jobdetailsList">
            <label htmlFor=""> company name</label>
          </div>

          <div className="JobCard">
            <div className="jobList">
              <div className="JobIteam"></div>
              <div className="JobIteam"></div>
            </div>
            <div className="jobList">
              <div className="JobIteam"></div>
              <div className="JobIteam"></div>
            </div>
            <div className="jobList">
              <div className="JobIteam"></div>
              <div className="JobIteam"></div>
            </div>
            <div className="jobList">
              <div className="JobIteam"></div>
              <div className="JobIteam"></div>
            </div>
            
          </div>
  
        </div>
       
        </div>
      
        <UserFooter/>
    </>
    
  );
};
export { UserHome };
