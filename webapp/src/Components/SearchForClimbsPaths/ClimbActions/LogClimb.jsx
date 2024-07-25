import { useState } from "react";
import RequestWithToken from "../../APICalls/RequestWithToken";

const LogClimbButton = ( {generalArea, specificArea, climb} ) => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const [userId, setUserId] = useState(''); 
    const body = {
        climbId: climb.id,
        area: generalArea.area_name,
        areaName: specificArea.area_name,
        climbName: climb.name,
        climbType: null,
        climbDescription: null,
        gradeType: null,
        grade: climb.grades.vscale,
        latitude: specificArea.metadata.lat,
        longitude: specificArea.metadata.lng
    };

    const handleLogClimbClick = async (e) => {
        e.preventDefault();

     console.log('Props received:', { generalArea, specificArea, climb });
     setUserId(userData.userId);
    if (!climb || !generalArea || !specificArea) {
        console.log("One or more required props is missing.")
        return;
    }

    try {

        const logClimb = await RequestWithToken(body, 'POST', `http://localhost:8080/api/${body.climbId}/addUserClimb/${userId}`)
        console.log(`userId: ${userId}\nclimbId: ${body.climbId}\narea: ${body.area}`);
    }
    catch (error) {
        console.log("Error logging climb ", error);
    }
    }

    return (

            <button className="log-climb" onClick={handleLogClimbClick}>Log Climb</button>

    )
}

export default LogClimbButton;