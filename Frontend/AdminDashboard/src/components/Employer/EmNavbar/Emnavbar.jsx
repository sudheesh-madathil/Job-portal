import "./EmNavbar.css";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import PropTypes from "prop-types"; // Import PropTypes
const EmNavbar = ({ companyName }) => {
  return (
    <>
      <div className="navmain">
        <div className="navcontainer">
          <div className="navlist">
            <div className="companylog">
              <img src="" alt="img" />
            </div>
            <div className="companyname">
              <h3>{companyName}</h3>
            </div>

            <div className="Emmessage">
              <MdMarkEmailUnread />
            </div>
            <div className="Emmessage">
              <IoNotificationsSharp />
            </div>
            <div className="EmSearch">
              <input type="text" />
              <button className="EmSearchbtn">search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
EmNavbar.propTypes = {
  companyName: PropTypes.string.isRequired, // Add PropTypes validation for id
};
export { EmNavbar };
