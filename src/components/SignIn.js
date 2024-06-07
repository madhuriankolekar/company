import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './loginscreen.css'; // Make sure to import your styles

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCardClick = () => {
    navigate('/screen1'); // Use navigate instead of history.push
  };

  const handleMobileSignInClick = () => {
    navigate('/screen2'); // Use navigate instead of history.push
  };

  const handleCreateAccountClick = () => {
    navigate('/createaccount'); // Use navigate instead of history.push
  };

  const handleForgotPasswordClick = () => {
    navigate('/ForgotPasswordScreen'); // Use navigate instead of history.push
  };

  const handleSignInClick = async () => {
    try {
      // Make an API call for login
      const response = await axios.post('your_login_api_endpoint', {
        email,
        password,
      });

      // Assuming your API returns a success message
      if (response.data.success) {
        // If successful, navigate to the desired screen (e.g., home/dashboard)
        navigate('/dashboard'); // Use navigate instead of history.push
      } else {
        // Show an error message to the user
        console.error('Login failed');
      }
    } catch (error) {
      // Handle API call error
      console.error('API call failed', error);
    }
  };

  return (
    <div className="sign-in-container">
      <div className="card1" onClick={handleCardClick}>
        <img src={require('../assert/download.jpg')} alt="Card Image" />
      </div>
      <div className="account-box">
        <h2>Account</h2>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignInClick}>Sign In</button>
        <div className="mobile-sign-in" onClick={handleMobileSignInClick}>
          <p>Mobile Number Sign In</p>
        </div>
        <p className="create-account" onClick={handleCreateAccountClick}>
          Create Account
        </p>
        <p className="forgot-password" onClick={handleForgotPasswordClick}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Signin;
