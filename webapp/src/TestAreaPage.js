import { useEffect, useState, useRef } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import TestFetchAPI from "./TestApi";
import Climbs from "./ClimbsPage";

const TestAreaPage = () => {
    const searchVariable = "Pennsylvania"

    useEffect(() => {
            TestFetchAPI(searchVariable)
                .then((result) => {
                    console.log(result.data)
                })
    }, [searchVariable]);


    return (
        <div className="area-list">

        </div>
    );
};

export default TestAreaPage;