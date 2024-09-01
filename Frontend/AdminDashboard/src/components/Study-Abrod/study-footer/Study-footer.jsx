import "./Study-footer.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { ToolTip } from "./ToolTip";
import { MdEmail } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";

import { MdCall } from "react-icons/md";

const StudyFooter = () => {
  return (
    <>
      <div className="studyfootermain">
        <div className="footerIteam">
          <div className="footeriteams">
            <label htmlFor="">About Us</label>
            <div className="footerLine"></div>
            <p>
              Santamonica Study Abroad Pvt. Ltd. is a premier overseas education
              facilitator, headquartered in Kochi, Kerala, India. We have been
              assisting students to make the right choice with regard to
              pursuing education in overseas educational institutions since
              2002.
            </p>
          </div>
          <div className="footeriteams">
            <label htmlFor="">Useful Links</label>
            <div className="footerLine"></div>
            <div className="list">
              <div className="list1">
                <ul>
                  <li> Study News</li>
                  <li> Cost Of Study</li>
                  <li> Find A Course</li>
                  <li> Blog</li>
                  <li> Careers</li>
                </ul>
              </div>
              <div className="list2">
                <ul>
                  <li> Stayback Option</li>
                  <li> Migrate to Canada</li>
                  <li> Book your E-counselling</li>
                  <li> CRS Calculater</li>
                  <li> SMSA CSR policy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footeriteams">
            <label htmlFor="">Help Line</label>
            <div className="footerLine"></div>
            <p> Cochin: +91 964****67</p>
            <img
              src="https://santamonicaedu.in/wp-content/uploads/2021/05/footer_map.png"
              alt=""
            />
          </div>
        </div>
        <div className="footerSocialMedia">
          <div className="mediaLogo">
            <IoLogoFacebook />
            <ToolTip text="facebook" />
          </div>
          <div className="mediaLogo">
            <FaSquareInstagram size={16} />
            <ToolTip text="instagram" />
          </div>
          <div className="mediaLogo">
            <FaLinkedin />
            <ToolTip text="linkedin" />
          </div>
          <div className="mediaLogo">
            <AiFillTwitterCircle />
            <ToolTip text="twitter" />
          </div>
          <div className="mediaLogo">
            <FaYoutube />
            <ToolTip text="youtube" />
          </div>
        </div>
        <div className="footerContact">
          <div className="contactIteam">
            <div className="contactList">
              <div className="conctactList1">
                <MdEmail />
              </div>
              <div className="conctactList1">
              <h5>info@santamonicaedu.in</h5>
          
              </div>
            </div>
          </div>
          <div className="contactIteam">
          <div className="contactList">
            <div className="conctactList1">
              <MdCall />
            </div>
            <div className="conctactList1">
            <h5>+919746****68</h5>
            </div>
          </div>
          </div>
          <div className="contactIteam">
          <div className="contactList">
            <div className="conctactList1">
              <FaLocationDot />
            </div>
            <div className="conctactList1">
                <h5>2nd Floor, Mahatma Gandhi Rd Perumanoor,kochi-682017</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { StudyFooter };
