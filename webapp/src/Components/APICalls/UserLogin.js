import React, { useEffect } from "react";

const UserLogin = async (username, password) => {    
  let response;

    try {
      response = await fetch("http://localhost:8080/api/login", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, password})
    });
    
    if (!response.ok) {
      throw new Error("Network response not okay");
    }
    
    const data = await response.json();
    const token = data.token;

    if (token) {
      sessionStorage.setItem('user', JSON.stringify(data));
    }
    return data;
  }
  catch (error) {
    console.log("Error fetching data", error);
  }};

  export const isAuthenticated = () => {
    const currentUser = sessionStorage.getItem('user');
    if (!currentUser) {
      return {}
    }
    return JSON.parse(currentUser);
  }

  export default UserLogin;
