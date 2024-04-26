import { useState } from "react";
import AreaList from './arealist';
import FetchAPI from "./openbetaapi";

// const results = await FetchAPI("Gunks");

const AreaPage = () => {
    const [areas, setAreas] = useState([
        {title: "Giants Workshop"},
        {title: "Sky Top"},
        {title: "Millbrook"},
        {title: "Lost City, The"},
        {title: "Trapps, The"},
        {title: "Trapps Bouldering"},
        {title: "Peterskill Bouldering"},
        {title: "Near Trapps, The"},
        {title: "Near Trapps Bouldering"},
        {title: "Peterskill"}

        // { title: results.data.areas[0].area_name },
    ])

    // const listItems = results.data.areas[1].children.map((climbs) =>
    // <li className="area-preview">{climbs.area_name}</li>
    // );


    return ( 
        
        <div className="areapage">
            <AreaList areas={ areas } title="Area" className="heading"/>
        </div>
     );
    }

    // console.log(results);
 
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