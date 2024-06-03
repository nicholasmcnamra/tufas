import React, { useState, useEffect, useRef } from 'react';
import FetchLocalAPI from './fetchlocalapi';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

const Login= () => {
  const componentRef = useRef(null);

  // Scroll to the component when it is rendered
  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    else {
      let apiResult = await FetchLocalAPI(username, password);
      console.log(username, password);
      console.log(apiResult)
        if (apiResult) 
          console.log(`Welcome back!`)
          return true;
    }

  };

const handleGoogleLogin = async () => {
  try {
    // Make a request to the backend server to initiate the Google OAuth2 flow
    const response = await axios.post('http://localhost:8080/login/oauth2/code/google');
    console.log(response.data);
    window.location.href = response.data;
  } catch (error) {
    console.error('Error initiating Google login:', error);
  }
};

  return (
    <div className="login" ref={componentRef}>
      <h2>Login</h2>
      <form onSubmit={ handleFormSubmit }>

        <div>
          <label className="username" htmlFor="username">Username:</label>
          <input className="usernamebox"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="password" htmlFor="password">Password:</label>
          <input className="passwordbox"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="loginbutton" type="submit">Log In</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;