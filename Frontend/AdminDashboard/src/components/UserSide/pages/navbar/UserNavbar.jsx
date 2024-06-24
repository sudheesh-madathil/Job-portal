
import { MdMarkEmailUnread } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import "./usernav.css";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handileClick = () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "no": "NO",
          "yes": "YES",
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
      }
    }).then((result) => {
      if (result.value === "no") {
        navigate("/Employer/Register");
      } else if (result.value === "yes") {
        navigate("/Employer/Login");
        
      }
    });
  };

    return(
        <>
        <div className="mainnav">
            <div className="navIteam">
                <div className="navLogo">
                    <img src="https://www.shutterstock.com/shutterstock/photos/1939068115/display_1500/stock-vector-job-portal-logo-design-template-concept-of-professional-employee-recruitment-agency-logo-vector-1939068115.jpg" alt="img" />




                </div>
                <div className="navLabel">
                    <label htmlFor="">home</label>
                    <label htmlFor="">company</label>
                    <label htmlFor="">jobs</label>
                </div>
                <div className="navIcon">
                    <div className="navmsg">
                    <MdMarkEmailUnread />
                    </div>
                
                
                <div className="navnotification">
                <IoNotificationsSharp />
                </div>
                <div className="navuserprofile">
                <FaUserCircle />
                </div>
                <div className="postJobBtn">
                  <button onClick={handileClick}>post your job</button>
                </div>
                </div>
            







            </div>









        </div>



        
        </>
    )
}
export{UserNavbar}