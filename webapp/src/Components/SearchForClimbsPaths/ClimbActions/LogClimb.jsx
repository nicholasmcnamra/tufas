import LogUserClimbs from "../../APICalls/LogUserClimbs";

const LogClimbButton = ( {generalArea, specificArea, climb} ) => {

    const handleLogClimbClick = async (e) => {
        e.preventDefault();

     console.log('Props received:', { generalArea, specificArea, climb });

    if (!climb || !generalArea || !specificArea) {
        console.log("One or more required props is missing.")
        return;
    }

    try {
        LogUserClimbs(generalArea, specificArea, climb);
    }
    catch (error) {
        console.log("Error logging climb ", error);
    }
    }

    return (
        <div className="log-climb-button-container">
            <button className="log-climb" onClick={handleLogClimbClick}>Log Climb</button>
        </div>
    )
}

export default LogClimbButton;