import React, { useState } from 'react';
import FetchLocalAPI from './fetchlocalapi';

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }
    
    FetchLocalAPI();
    console.log(username,password)
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit }>
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
    </div>
  );
}

export default Login;