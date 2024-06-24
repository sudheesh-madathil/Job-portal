import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function EmployerRegister() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const history = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register submitted:', { name, username, email, newPassword });
    // Navigate to another page on successful registration, e.g., admin dashboard
    history('/Employer/PostJob');
  };

  return (
    <div className="register-container">
  
      <div className="register-box">
        <div className="register-list">

       
        <h2>Empoyer Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
       
          <button type="submit" className="register-button">Register</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export{EmployerRegister};
