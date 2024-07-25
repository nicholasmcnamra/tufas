import { headerWithoutBodyWithAuthentication } from "./HeaderVariables";

const GetRequestWithToken = async (method, endpoint) => {
    let response;
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const token = `Bearer ${userData.token}`;
    let requestHeader = headerWithoutBodyWithAuthentication(method, token);
    
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

export default GetRequestWithToken;