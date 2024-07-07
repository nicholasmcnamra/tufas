import LogUserClimbs from "../../APICalls/LogUserClimbs";

const LogClimbButton = ( generalArea, specificArea, climb ) => {

    const handleLogClimbClick = async (e) => {
        e.preventDefault();
        LogUserClimbs(generalArea, specificArea, climb)
    }

    return (
        <div className="log-climb-button-container">
            <button className="log-climb" onClick={handleLogClimbClick}>Log Climb</button>
        </div>
    )
}

export default LogClimbButton;