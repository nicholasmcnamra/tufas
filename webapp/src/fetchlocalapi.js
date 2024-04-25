const FetchLocalAPI = () => {    
    try {
    fetch("http://localhost:8080/users", {
            mode: 'cors',
            method: 'GET',
            headers: {'Content-Type':'application/json'},
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response not okay")
      }
      return response.json();
    })
    .then (data => {
      console.log("data received:", data)
    })
  }
  catch (error) {
    console.log("Not okay")
  }}

  export default FetchLocalAPI
