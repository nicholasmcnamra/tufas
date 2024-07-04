import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import TestFetchAPI from "./TestApi";
import Climbs from "./Components/SearchForClimbsPaths/ClimbsPage";

const TestAreaPage = () => {
    const searchVariable = "California"

    useEffect(() => {
            TestFetchAPI(searchVariable)
                .then((result) => {
                    console.log(result.data)
                    console.log(result.data.areas[0].children)
                    const climbingAreas = result.data.areas[0].children[0].children;
                    for (let i = 0; i < climbingAreas.length; i++) {
                        if (climbingAreas[i].climbs.length > 0) {
                            console.log(climbingAreas[i])
                        }
                    }
                    
                })
    }, [searchVariable]);


    return (
        <div className="area-list">

        </div>
    );
};

export default TestAreaPage;