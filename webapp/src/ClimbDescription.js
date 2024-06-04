import { useEffect, useState } from "react";

const Description = ({ climbs, climbIndex }) => {
    const [climbToDisplay, setClimbToDisplay] = useState(climbs[climbIndex]);

    useEffect(() => {
        setClimbToDisplay(climbs[climbIndex]);
        return () => {};
    }, [climbs, climbIndex]);

    if (!climbToDisplay) {
        return <div></div>;
    }

    return (
        <div className="description-container">
            <div className="description-preview-box">
                <h2 className="climb-to-display-name">{climbToDisplay.name}</h2>
                <p className="grade">{climbToDisplay.grades.vscale}</p>
                <p className="desc">Description:</p>
                <p className="climb-to-display-description">{climbToDisplay.content.description}</p>
                <p className="prot">Protection:</p>
                <p className="protection">{climbToDisplay.content.protection}</p>
            </div>
                <div className="button-container">
                <button className="log-climb">Log Climb</button>
                <button className="add-media">Add Media</button>
                <button className="map">Map</button>
                </div>
            </div>
    )
}

export default Description;