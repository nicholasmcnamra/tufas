import { headerWithAuthentication } from "./HeaderVariables";

const RequestWithToken = async (body, method, endpoint) => {
    let response;
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const token = `Bearer ${userData.token}`;
    let requestHeader = headerWithAuthentication(token, body);
    
    try {
    response = await fetch(`${endpoint}`, requestHeader);

    if (!response.ok) {
        throw new Error("Trouble fetching response.");
    }

    const data = await response.json();
    console.log("Data received", data);
    return data;

} catch(error) {

        console.log("Error fetching data", error);
    }
};

export default RequestWithToken;