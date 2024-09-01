

import "./UserLogin.css"
import { useNavigate } from 'react-router-dom';
// import {  Navigate, useNavigate } from 'react-router-dom';

function UserLogin() {
 const  Navigate = useNavigate()




const toggleForm =()=>{
Navigate('/user/userHome')
}

return (
  <div className="AppuserLogin">
    <div className="auth-container">
   
        <>
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="LoginBTN
            ">Submit</button>
            <button type="button"className="google-LoginBTN
            ">Login with Google</button>
          </form>
          <p className="toggle-text">
            Dont have an account? <button onClick={toggleForm} className="toggle-LoginBTN
            ">Register here</button>
          </p>
        </>
      
        
          
    
    </div>
  </div>
);
}









export {UserLogin};
