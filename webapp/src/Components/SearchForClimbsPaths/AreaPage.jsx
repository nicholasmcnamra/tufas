import { useEffect, useState, useRef } from "react";
import Climbs from "./ClimbsPage";

const AreaPage = ({ result }) => {
    const [areas, setAreas] = useState([]);
    const [specificArea, setSpecificArea] = useState([]);
    const [climbLogAreas, setClimbLogAreas] = useState([]);
    const [error, setError] = useState(null);
    const [climbs, setClimbs] = useState([]);
    const componentRef = useRef(null);

    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: 'smooth' });
        }}, [areas]);


    useEffect(() => {
        if(result) {
            try {

                const filteredAreas = result.data.areas[0].children.filter(area => 
                    area.climbs && area.climbs.length > 0
                );
                setAreas(filteredAreas);
                setClimbLogAreas(result.data.areas[0]);
            }
            catch(error) {
                setError(error);
            }
        }
    }, [result])

    if (error) {
        return <div className="error-container">{error.message}</div>
    }

    const handleClick = async (buttonIndex) => {
        //
        try {
            setClimbs(areas[buttonIndex].climbs);
            setSpecificArea(areas[buttonIndex]);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="area-list" ref={componentRef}>
            {areas.map((area, index) => (
                <div className="area-preview"  key={index} >
                    <button className="areaitem" onClick={ () => handleClick(index) }> { area.area_name } </button>
                </div>
            ))}
            {climbs !== null && <Climbs climbs={climbs} specificArea={specificArea} generalArea={climbLogAreas} />}
        </div>
    );
};

export default AreaPage;

//