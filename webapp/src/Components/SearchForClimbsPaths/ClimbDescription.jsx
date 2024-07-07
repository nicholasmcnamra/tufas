import { useEffect, useRef, useState } from "react";
import LogClimbButton from "./ClimbActions/LogClimb";

const Description = ({ climbs, climbIndex, specificArea, generalArea }) => {
    const climbToDisplay = climbs[climbIndex];
    const componentRef = useRef(null);

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

    console.log(specificArea);

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
                <LogClimbButton generalArea={generalArea} specificArea={specificArea} climb={climbToDisplay} />
                <button className="add-media">Add Media</button>
                <button className="map">Map</button>
                </div>
            </div>
    )
}

export default Description;