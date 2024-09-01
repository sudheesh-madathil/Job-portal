import { useState, useEffect } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./usernav.css";
import { RiLogoutCircleLine } from "react-icons/ri";
const UserNavbar = ({ userName }) => {
  const [user, setUser] = useState(userName);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setUser(userName);
  }, [userName]);

  const navigate = useNavigate();

  const handleClick = () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          no: "NO",
          yes: "YES",
        });
      }, 1000);
    });

    Swal.fire({
      title: "Do you have an Account?",
      input: "radio",
      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    }).then((result) => {
      if (result.value === "no") {
        navigate("/Employer/Register");
      } else if (result.value === "yes") {
        navigate("/Employer/Login");
      }
    });
  };

  const userLogin = () => {
    navigate("/");
  };

  const toggleUserMenu = () => {
    setShowUserMenu((prevState) => !prevState);
  };

  const userJobHistory = () => {
    navigate(`/user/userJobHistory/${id}`);
  };
  const userProfile = () => {
    navigate(`/user/userProfile/${id}`);
  };
  const userMessageBtn = () => {
    navigate(`/user/message/${id}`);
  };
  const toggleDropdownMenu = () => {
    setShowDropdownMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="mainnav">
        <div className="navIteam">
          <div className="navLogo">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1939068115/display_1500/stock-vector-job-portal-logo-design-template-concept-of-professional-employee-recruitment-agency-logo-vector-1939068115.jpg"
              alt="img"
            />
          </div>
          <div className="navLabel">
            <label className="navLabel1" htmlFor="">
              <Link className="navLabel1" to={`/user/userhome/${id}`}>
                Home
              </Link>
            </label>
            <label className="navLabel1" htmlFor="">
              Company
            </label>
            <label className="navLabel1" htmlFor="">
              Jobs
            </label>
          </div>
          <div className="navIcon">
            <div className="navmsg">
              <button onClick={userMessageBtn} className="UsermessageBtn">
                <MdMarkEmailUnread  size={24}/>
              </button>
            </div>
            <div className="navnotification">
              <IoNotificationsSharp size={24}/>
            </div>
            <div className="navuserprofile">
              <button className="facebtn" onClick={toggleUserMenu}>
                <FaUserCircle size={24} />
              </button>
              {showUserMenu && (
                <div className="userMenu">
                  <ul>
                    <li onClick={userProfile}>Profile</li>
                    <li>Settings</li>
                    <li onClick={userJobHistory}>Job History</li>
                    <li onClick={userLogin}>Logout</li>
                  </ul>
                </div>
              )}
              {user && user.fullName && (
                <span className="username">{user.fullName}</span>
              )}
            </div>
            <div className="postJobBtn">
 
              <button className="jobposting-btn" onClick={handleClick}>
                Post Your Job
              </button>
              <button className="logoutBtn" onClick={userLogin}>
                          
                          <RiLogoutCircleLine  size={24}/>
                                        </button>

            </div>
          </div>
          <div className="hamburger" onClick={toggleDropdownMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {showDropdownMenu && (
          <div className={`dropdownMenu ${showDropdownMenu ? "open" : ""}`}>
            <Link to={`/user/userhome/${id}`}>Home</Link>
            <Link to="#">Company</Link>
            <Link to="#">Jobs</Link>
            <button onClick={userMessageBtn}>Messages</button>
            <button onClick={userProfile}>Profile</button>
            <button onClick={userJobHistory}>Job History</button>
            <button onClick={userLogin}>Logout</button>

            <button onClick={handleClick}>Post Your Job</button>
          </div>
        )}
      </div>
    </>
  );
};

export { UserNavbar };
