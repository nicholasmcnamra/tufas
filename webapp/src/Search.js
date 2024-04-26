import { useState, useEffect } from "react";
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FetchAPI from "./openbetaapi";
import Login from "./Login";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    const handleClick = async (v) => {
        // e.preventDefault();
        setSearchArea(v);
        // // FetchAPI(value);
        let result = await FetchAPI(v)
        console.log(result);
        console.log(v);
        // return result;
      };

    return (
        <div>
            <div className="search">
            <input  className="searchbar"id='title'></input>
            <button className="searchbutton" onClick={() => handleClick(document.getElementById('title').value)}>Click me!</button>
            </div>
        </div>

    )
}
export default Search