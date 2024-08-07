import { useEffect, useState } from "react";
import GetRequestWithToken from "./APICalls/GetRequestWithToken";

const UserClimbs = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [climbData, setClimbData] = useState({});
    let groupedData;

    useEffect( async () => {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        setCurrentUser(userData.userId);
        
        setClimbData(await GetRequestWithToken('GET', `http://localhost:8080/api/climblog/${currentUser}`));
        console.log(currentUser);
    }, []);




    return (
        <div className="myclimbs-container">
            {/* {climbData.map((climb, index) => (
                <div className="climb-container"></div>
            ))} */}
        </div>
    )
}

export default UserClimbs;