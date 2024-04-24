import { useState } from "react";
import AreaList from './bloglist';
import FetchAPI from "./openbetaapi";

const results = await FetchAPI();

const Home = () => {
    const [areas, setAreas] = useState([
        { title: results.data.areas[0].area_name },
    ])

    const listItems = results.data.areas[0].children.map((climbs) =>
    <li>{climbs.area_name}</li>
    );


    return ( 
        <div className="home">
            <AreaList areas={ areas } title="Area" />
            <li>{listItems}</li>
        </div>
     );
    }

    console.log(results);
 
export default Home;



// const handleClickAgain = (name) => {
//     console.log("hello, " + name) 
// };
//onClick={() => {handleClickAgain("mario")}} wraps handleClickAgain in an anonymous function so that the function
//only runs when someone clicks it, rather than running when the program starts
// onClick={handleClickAgain} will run the function when the program begins
// {/* <p className="name">{   name    } is {  age } years old</p>
// {/* <button className="clickme" onClick={handleClick}>ClickMe</button> */} */}


//this is superhelpful for iterating over lists:

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