import React, { useState, useEffect, useRef } from 'react';
import FetchLocalAPI from './fetchlocalapi';
import ReactOauthPopup from 'react-oauth-popup';

// const Login= () => {
//   const componentRef = useRef(null);

//   // Scroll to the component when it is rendered
//   useEffect(() => {
//     if (componentRef.current) {
//       componentRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFormSubmit = async(e) => {
//     e.preventDefault();

    
//     if (!username || !password) {
//       alert('Please fill in both fields.');
//       return;
//     }
//     else {
//       let apiResult = await FetchLocalAPI(username, password);
//       console.log(username, password);
//       console.log(apiResult)
//         if (apiResult) 
//           console.log(`Welcome back!`)
//           return true;
//     }

//   };

//   return (
//     <div className="login" ref={componentRef}>
//       <h2>Login</h2>
//       <form onSubmit={ handleFormSubmit }>

//         <div>
//           <label className="username" htmlFor="username">Username:</label>
//           <input className="usernamebox"
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="password" htmlFor="password">Password:</label>
//           <input className="passwordbox"
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button className="loginbutton" type="submit">Log In</button>
//       </form>
//     </div>
//   );
// }

const Login = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleAccessToken = (tokenResponse) => {
    setAccessToken(tokenResponse.accessToken);
  }

  const handleCode = (code, params) => {
    console.log("Received code:", code);
    console.log("URLSearchParams:", params);
  };
  
  const handleClose = () => {
    console.log("Popup closed!");
  };

  return (
    <div className="">
      <h2>Login</h2>
      <ReactOauthPopup
        authorizationUrl="http://localhost:8080/oauth2/authorize"
        clientId="your_client_id"
        redirectUri="http://localhost:3000/login/oauth2/code/google"
        responseType="code"
        scope="openid"
        onCode={handleCode}
        onClose={handleClose}
        >
        <div>Click me to open a Popup</div>
        </ReactOauthPopup>
    </div>
  );
}

export default Login;