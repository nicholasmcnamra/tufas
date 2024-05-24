import React, { useEffect } from "react";

const FetchLocalAPI = async (username, password) => {    
  let response;
  // useEffect(() => {
  //   const fetchData = async () => {
    try {
      response = await fetch("http://localhost:8080/api/login", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, password})
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response not okay");
    }
    
    const data = await response.json();
    console.log("Data received", data);
    return data;
  }
  catch (error) {
    console.log("Error fetching data", error);
  }};

// }, []);
// };

  export default FetchLocalAPI
