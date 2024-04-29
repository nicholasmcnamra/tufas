import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import FetchAPI from "./openbetaapi";
import Climbs from "./ClimbsPage";

const AreaPage = () => {
    const location = useLocation();
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [climbIndex, setClimbIndex] = useState([]);
    const [apiResult, setApiResult] = useState([]);
    const [climbs, setClimbs] = useState([]);
    let history = useHistory();
    const componentRef = useRef(null);
    // Retrieve search query from URL parameter
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    //CURRENTLY NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!
    // Scroll to the component when it is rendered
    useEffect(() => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: 'smooth' });
            console.log(true)
        }
        }, [areas]);

    useEffect(() => {
        // if searchQuery is not null, Fetch Api using the query result as a parameter
        if (searchQuery) {
            setLoading(true);
            FetchAPI(searchQuery)
                .then((result) => {
                    setTimeout(() => {
                        setApiResult(result);
                        setAreas(result.data.areas[0].children);
                        setLoading(false);
                    }, 200)
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        }
        console.log(searchQuery)
    }, [location.search]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleClick = async (buttonIndex) => {
        try {
            setLoading(true);
            const result = await FetchAPI(searchQuery); // Assuming FetchAPI is an asynchronous function
            setApiResult(result);
            setLoading(false);
            // Now that apiResult is updated, trigger handleClick
            setClimbIndex(buttonIndex);
            // console.log("API result:", result);
            // console.log("Climb Index:", climbIndex);
            setClimbs(result.data.areas[0].children[buttonIndex].climbs);
        } catch (error) {
            setError(error);
            setLoading(false);
        }

        //need to take index of each button
        //need to set climbs to the subarray returned by FetchAPI
        //need to share that data as a prop to ClimbsPage
        //history.push to ClimbsPage
        //maybe missing a few steps?
    }

    return (
        <div className="area-list">
            {areas.map((area, index) => (
                <div className="area-preview" ref={componentRef} key={index}>
                    <button className="areaitem" onClick={ () => handleClick(index) }> { area.area_name } </button>
                </div>
            ))}
            {console.log("Area Page: " + climbs)}
                        {climbs !== null && <Climbs climbs={climbs} />}
        </div>
    );
};

export default AreaPage;