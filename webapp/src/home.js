import { useState } from "react";
import BlogList from './bloglist';
import GetCharacters from "./openbetaapi";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new webstite', body: 'lorem ipsum...', author: 'Fitzgerald', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Hemingway', id: 2 },
        { title: 'Web development top tips', body: 'lorem ipsum...', author: 'Man Ray', id: 3 }

    ])

    console.log(GetCharacters());

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs" />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'Hemingway') } title="Hemingway's Blogs" />
        </div>
     );
    }

        
 
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