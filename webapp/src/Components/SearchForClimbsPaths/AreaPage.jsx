import { useEffect, useState, useRef } from "react";
import Climbs from "./ClimbsPage";

const AreaPage = ({ result }) => {
    const [areas, setAreas] = useState([]);
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
                setAreas(result.data.areas[0].children)
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
        try {
            setClimbs(result.data.areas[0].children[buttonIndex].climbs);
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
            {climbs !== null && <Climbs climbs={climbs} />}
        </div>
    );
};

export default AreaPage;