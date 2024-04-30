import React, { useEffect } from "react";

const FetchLocalAPI = async () => {    
  let response;
  let data
  // useEffect(() => {
  //   const fetchData = async () => {
    let xhr = new XMLHttpRequest();
    try {
      response = await fetch("http://localhost:8080/api/users", {
            mode: 'cors',
            method: 'GET',
            headers: {'Content-Type':'application/json'},
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response not okay");
    }
    
    data = await response.json();
    console.log("Data received", data);
    return data;
  }
  catch (error) {
    console.log("Error fetching data", error);
    console.warn(xhr.response)
  }};

// }, []);
// };

  export default FetchLocalAPI
