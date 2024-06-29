import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import FetchAPI from "../APICalls/openbetaapi";
import Climbs from "./ClimbsPage";

const AreaPage = () => {
    const location = useLocation();
    const [areas, setAreas] = useState([]);
    const [error, setError] = useState(null);
    const [climbIndex, setClimbIndex] = useState([]);
    const [apiResult, setApiResult] = useState([]);
    const [climbs, setClimbs] = useState([]);
    let history = useHistory();
    const componentRef = useRef(null);
    // Retrieve search query from URL parameter
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: 'smooth' });
        }}, [areas]);

    useEffect(() => {
        if (searchQuery) {
            FetchAPI(searchQuery)
                .then((result) => {
                    setApiResult(result);
                    setAreas(result.data.areas[0].children);
                })
                .catch((error) => {
                    setError(error);
                });
            }
        }, [location.search]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = async (buttonIndex) => {
        try {
            setClimbIndex(buttonIndex);
            setClimbs(apiResult.data.areas[0].children[buttonIndex].climbs);
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