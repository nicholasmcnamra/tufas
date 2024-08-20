import { useEffect, useState } from "react";
import GetRequestWithToken from "./APICalls/GetRequestWithToken";

const UserClimbs = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [climbData, setClimbData] = useState({});
    let groupedData;

    useEffect( async () => {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        setCurrentUser(userData.userId);
        
        const userClimbs = await GetRequestWithToken('GET', `http://localhost:8080/api/climblog/${currentUser}`);
        setClimbData(userClimbs);
        console.log(currentUser);
    }, []);




    return (
        <div className="myclimbs-container">
            {climbData.map((climb, index) => (
                <div className="climb-container">
                    <h2 className="climb-area-name">{climb.area}</h2>
                    <h3 className="climb-name">{climb.climb.climbName}</h3>
                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672" alt="" className="map" />
                </div>
            ))}
        </div>
    )
}

export default UserClimbs;