const LogUserClimbs = async ( climb ) => {
    let response;
    let token = localStorage.getItem('token');

    try {
        response = await fetch("http://localhost:8080/api/climbs", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            authorization: `Bearer ${token}`,
            body: JSON.stringify({climb})
        });

        if (!response.ok) {
            throw new Error("Network response not okay.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Error fetching data ", error);
    }
}

export default LogUserClimbs;