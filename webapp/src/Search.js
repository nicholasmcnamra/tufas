import { useState, useEffect } from "react";
import FetchAPI from "./openbetaapi";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    const handleClick = (value) => {
        // e.preventDefault();
        setSearchArea(value);
        // FetchAPI(value);
        console.log(FetchAPI(value));
        console.log(value);
      };
      let title = document.getElementById('title').value;
    return (
        <div>
            <div className="search">
            <input  id='title'></input>
            <button onClick={() => handleClick(title)}>Click me!</button>
            </div>
        </div>
    )
}
export default Search