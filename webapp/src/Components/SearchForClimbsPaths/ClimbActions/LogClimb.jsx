import CreateClimb from "../../APICalls/CreateClimb";
import LogClimbByUser from "../../APICalls/LogClimb_By_User";
import { useState } from "react";

const LogClimbButton = ( {generalArea, specificArea, climb} ) => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const [userId, setUserId] = useState(''); 
    const climbId = climb.id;
    const area = generalArea.area_name;

    const handleLogClimbClick = async (e) => {
        e.preventDefault();

     console.log('Props received:', { generalArea, specificArea, climb });

    if (!climb || !generalArea || !specificArea) {
        console.log("One or more required props is missing.")
        return;
    }

    try {
        setUserId(userData.userId);
        await CreateClimb(generalArea, specificArea, climb);
        console.log(`userId: ${userId}\nclimbId: ${climbId}\narea: ${area}`);
        await LogClimbByUser(userId, climbId, area);
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