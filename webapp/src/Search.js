import { useState, useEffect } from "react";
import FetchAPI from "./openbetaapi";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    const handleClick = (v) => {
        // e.preventDefault();
        setSearchArea(v);
        // FetchAPI(value);
        console.log(FetchAPI(v));
        console.log(v);
      };

    return (
        <div>
            <div className="search">
            <input  id='title'></input>
            <button onClick={() => handleClick(document.getElementById('title').value)}>Click me!</button>
            </div>
        </div>
    )
}
export default Search