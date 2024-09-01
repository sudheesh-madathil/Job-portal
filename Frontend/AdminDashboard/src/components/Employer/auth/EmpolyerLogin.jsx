import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EmployerLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/Emlogin', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      const { id } = response.data;
   
      navigate(`/Employer/Dashboard/${id}`);
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Employer Login</h2>
        <form >
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button onClick={handleLogin} className="login-button">Login</button>
        </form>
        <p className="register-link">
          Dont have an account? <a href="#register">Register</a>
        </p>
      </div>
    </div>
  );
}

export { EmployerLogin };
