import React, { useEffect } from "react";

const FetchLocalAPI = () => {    
  let response;
  let data
  useEffect(() => {
    const fetchData = async () => {
    try {
      response = await fetch("http://localhost:8080/users", {
            mode: 'cors',
            method: 'GET',
            headers: {'Content-Type':'application/json'},
    });
    if (!response.ok) {
      throw new Error("Network response not okay");
    }
    
     data = await response.json();

    console.log("Data received", data);
  }
  catch (error) {
    console.log("Error fetching data", error);
  }};

  fetchData()
}, {});

return (
  <div>{console.log(data)}</div>
)
};

  export default FetchLocalAPI
