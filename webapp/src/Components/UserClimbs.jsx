import { useEffect, useState } from "react";
import GetRequestWithToken from "./APICalls/GetRequestWithToken";

const UserClimbs = () => {
    const [climbData, setClimbData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let groupedData;

    useEffect(() => {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        let currentUser = userData.userId;
        const fetchUserClimbs = async () => {
            if (userData) {
                try {
                    const userClimbs = await GetRequestWithToken('GET', `http://localhost:8080/api/climblog/${currentUser}`);
                    setClimbData(userClimbs);
                }
                catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            else {
                console.error("Current user not found in session storage.");
                setIsLoading(false);
            }
        }

        fetchUserClimbs();
    }, []);

    return (
        <div className="myclimbs-container">
            {Array.isArray(climbData) && climbData.length > 0 ? (
            climbData.map((climb) => (
                <div className="climb-container" key={climb.climb.climbId}>
                    <h2 className="climb-area-name">{climb.area}</h2>
                    <h3 className="climb-name">{climb.climb.climbName}</h3>
                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672" alt="" className="map" />
                    
                </div>
            )
            ))
            :
            <p className="no-user-climbs">No climbs found.</p>
        }
            {console.log(climbData)}
        </div>
    )
}

export default UserClimbs;