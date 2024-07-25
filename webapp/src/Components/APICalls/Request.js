import { headerWithoutAuthentication } from "./HeaderVariables";

const Request = async (body, method, endpoint) => {
    let response;
    
    let requestHeader = headerWithoutAuthentication(body, method);

    try {
        response = await fetch(`${endpoint}`, requestHeader);

        if (!response.ok) {
            throw new Error("Network response not okay.")
        }

        const data = await response.json();
        console.log("data received: ", data);
        return data;
    }
    catch(error) {
        console.log("Error fetching data ", error)
    }
}

export default Request;