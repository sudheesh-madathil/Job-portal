import { useState } from 'react';
import "./Study-Navbar.css";

const StudyNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="study-main">
      <div className="study-nav">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li className="study-item">Home</li>
          <li className="study-item">Language Training</li>
          <li className="study-item">Our Services</li>
          <li className="study-item">
            <select name="" id="">
              <option value="">Study Abroad</option>
              <option value="">2</option>
            </select>
          </li>
          <li className="study-item">Find A Course</li>
          <li className="study-item">About Us</li>
        </ul>
      </div>
    </div>
  );
};

export { StudyNavBar };
