import { useEffect, useRef, useState } from "react";
import LogClimbButton from "./ClimbActions/LogClimb";

const Description = ({ climbs, climbIndex, specificArea, generalArea }) => {
    const climbToDisplay = climbs[climbIndex];
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const [userId, setUserId] = useState(null); 
    const componentRef = useRef(null);

    useEffect(() => {
        if (userData) {
            setUserId(userData.userId);
    } 
    else {
        console.warn("User is not logged in and userId is not available in session storage.")
    }
    }, []);

    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }, [climbToDisplay])

    // useEffect(() => {
    //     setClimbToDisplay(climbs[climbIndex]);
    //     return () => {};
    // }, [climbs, climbIndex]);

    if (!climbToDisplay) {
        return <div></div>;
    }

    return (
        <div className="description-container" ref={componentRef}>
            <div className="description-preview-box">
                <h2 className="climb-to-display-name">{climbToDisplay.name}</h2>
                <p className="grade">{climbToDisplay.grades.vscale}</p>
                <p className="desc">Description:</p>
                <p className="climb-to-display-description">{climbToDisplay.content.description}</p>
                <p className="prot">Protection:</p>
                <p className="protection">{climbToDisplay.content.protection}</p>
            </div>
                <div className="button-container">
                {userId ? (<LogClimbButton generalArea={generalArea} specificArea={specificArea} climb={climbToDisplay} />) : (<></>)}
                <button >Add Media</button>
                <button >Map</button>
                </div>
            </div>
    )
}

export default Description;