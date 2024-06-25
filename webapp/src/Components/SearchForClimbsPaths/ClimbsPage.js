import { useRef, useEffect, useState } from "react"
import Description from "./ClimbDescription";

const Climbs = ({ climbs }) => {
    const [climbsList, setClimbsList] = useState([]);
    const [climbIndex, setClimbIndex] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const componentRef = useRef(null);

    useEffect(()=> {
        if (Array.isArray(climbs) && climbs.length > 0) {
        setClimbsList(climbs);
        setLoading(false)
        console.log("Use Effect: " + climbs)
        {console.log("Number of Climbs: " + climbs.length)}
        {console.log("Climb: " + climbs[0])}
    }
         else {
        setLoading(false); // Update loading state even if climbs is empty
    }}, [climbs]) 

    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log(true)
        }
        }, [climbsList]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleClick = (buttonIndex) => {      
            setClimbIndex(buttonIndex);
    }


    return (
        <div className="climb-preview-box" ref={componentRef}>
            {climbs.map((climb, index) => (
            <div className="climb-preview-container">
            <div className="climb-preview" key={index}>
            <button className="climbitem" onClick={ () => handleClick(index)}> {climb.name}</button>
        </div>
        
        </div>
        ))}
        <div className="descriptionarea"><Description climbs={ climbs } climbIndex= {climbIndex }/></div>
        </div>
        
        
    );
};
export default Climbs


// useEffect(() =>{

//     if (!climbIndex == null) {
//         setLoading(true);
//         const climbsData = apiResult.data.areas[0].children[climbIndex].climbs;
//         setTimeout(() => {
//             setClimbs(climbsData);
//             setLoading(false);
//             console.log(climbIndex)
//         }, 1000);
//     }
// }, [apiResult, climbIndex]);


// if (loading) {
//     return <div>Loading...</div>;
// }

// if (error) {
//     return <div>Error: {error.message}</div>;
// }


//USE THIS IF RETURN NOT RENDERING

// const listClimbs = () => {
//     if (Array.isArray(climbs)) {
//     return climbs.map((climb, index) => (
//     <div className="climb-preview-container">
//     <div className="climb-preview" key={index}>
//     <button className="climbitem"> {climb.name}</button>
// </div>
// </div>
// ));
// }
// else {
// return <div className="noclimbs">No Climbs to Display</div>
// }
// };