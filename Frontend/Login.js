import React, { useState, useEffect } from 'react';
import GoogleLogin from 'react-google-login';

const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    setUser(response.profileObj);
    console.log('Login successful:', response);
    // Redirect to the feedback page or store user information in state
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
    // Handle login errors appropriately
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default Login;
