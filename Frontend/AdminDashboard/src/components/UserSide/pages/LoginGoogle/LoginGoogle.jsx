import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleSignup = () => {
  const navigate = useNavigate();
  const [googleId, setGoogleId] = useState('');

  const handleLoginSuccess = (credentialResponse) => {
    console.log('Credential Response:', credentialResponse);

    // Send the credential to the backend
    fetch('http://localhost:3000/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId: credentialResponse.credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Backend Response:', data);
        setGoogleId(data.user.googleId);
        console.log(data.user.googleId, "user google data"); // Logging inside then block

        if (data.token) {
          // Store the token in localStorage
          localStorage.setItem('token', data.token);
          // Navigate to the user home page with googleId as a URL parameter
          navigate(`/user/userHome/${data.user.googleId}`);
        } else {
          console.error('Authentication failed:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  // useEffect to log googleId whenever it changes
  useEffect(() => {
    console.log(googleId, "user google data (from useEffect)");
  }, [googleId]);

  return (
    <GoogleOAuthProvider   clientId="1000930394573-7if7r4ms670qggrdk55m6e7nq2o90chs.apps.googleusercontent.com">
 
      <div className="App">
      
        <GoogleLogin      
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export { GoogleSignup };
