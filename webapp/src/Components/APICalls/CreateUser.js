const CreateUser = async (username, password, email) => {
    let response;

    try {

        const userData = {
            userName: username,
            password: password,
            email: email
        }
        response = await fetch("http://localhost:8080/api/users", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify( { userData } )
        });

        if (!response.ok) {
            throw new Error("Trouble fetching response")
        }

        const data = await response.json();
        console.log("data received: ", data);
        return data;
    }
    catch(error) {
        console.log("Error fetching data ", error)
    }
}

export default CreateUser;