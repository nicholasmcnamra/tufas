import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import FetchAPI from "./openbetaapi";

const AreaPage = () => {
    const location = useLocation();
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Retrieve search query from URL parameter
        const searchParams = new URLSearchParams(location.search);
        const searchQuery = searchParams.get('search');

        // if searchQuery is not null, Fetch Api using the query result as a parameter
        if (searchQuery) {
            setLoading(true);
            FetchAPI(searchQuery)
                .then((result) => {
                    setAreas(result.data.areas[0].children);
                    console.log(result)
                    setLoading(false);
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

    return (
        <div className="area-list">
            {areas.map((area, index) => (
                <div className="area-preview" key={index}>
                    <button className="areaitem">{area.area_name}</button>
                </div>
            ))}
        </div>
    );
};

export default AreaPage;



// const handleClickAgain = (name) => {
//     console.log("hello, " + name) 
// };
// onClick={() => {handleClickAgain("mario")}} wraps handleClickAgain in an anonymous function so that the function
// only runs when someone clicks it, rather than running when the program starts
// onClick={handleClickAgain} will run the function when the program begins
// {/* <p className="name">{   name    } is {  age } years old</p>
// {/* <button className="clickme" onClick={handleClick}>ClickMe</button> */} */}


// this is superhelpful for iterating over lists:

// return ( 
//     <div className="home">
//         {blogs.map((blog) => (
//             <div className="blog-preview" key ={blog.id}>
//                 <h2>{   blog.title  }</h2>
//                 <p>Written by: {    blog.author }</p>
//             </div>
//         ))}
//     </div>
//  );

    // const [areas, setAreas] = useState([
    //     {title: "Giants Workshop"},
    //     {title: "Sky Top"},
    //     {title: "Millbrook"},
    //     {title: "Lost City, The"},
    //     {title: "Trapps, The"},
    //     {title: "Trapps Bouldering"},
    //     {title: "Peterskill Bouldering"},
    //     {title: "Near Trapps, The"},
    //     {title: "Near Trapps Bouldering"},
    //     {title: "Peterskill"}

        // { title: results.data.areas[0].area_name },
    // ])

        // const listItems = result.data.areas[1].children.map((climbs, index) => (
    //     <li key={index} className="area-preview">{climbs.area_name}</li>
    // ));

                {/* <AreaList areas={ searchArea } title="Area" className="heading"/> */}