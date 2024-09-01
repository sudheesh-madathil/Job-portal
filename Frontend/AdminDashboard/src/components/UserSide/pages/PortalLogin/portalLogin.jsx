import "./PortalLogin.css";
import axios from "axios";
import { GoogleSignup } from "../LoginGoogle/LoginGoogle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PortalLogin = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const navigate = useNavigate();

  const portallogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/userLogin', {
        email, 
        password,
      });
      console.log('Login successful:', response.data);
      const { id } = response.data;
      navigate(`/user/userHome/${id}`);
    } catch (err) {
      console.error('Login error:', err);
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div className="portLogin">
        <div className="portaloginList">
          <div className="portalloginimg">
            <img src="https://img.freepik.com/free-photo/log-secured-access-verify-identity-password-concept_53876-124066.jpg?t=st=1720010217~exp=1720013817~hmac=23ee992051d19803737ec08d49dbdee8732b9aded73b599275d2717fe64b3ac2&w=996" alt="img" />
          </div>

          <div className="portLoginIteam">
            <input
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button onClick={portallogin} className="PortalLoginBtn">Login</button>
            <GoogleSignup />
          </div>
        </div>
      </div>
    </>
  );
};

export { PortalLogin };
