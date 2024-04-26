import { useState, useEffect } from "react";
import {  BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FetchAPI from "./openbetaapi";
import Login from "./Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    let history = useHistory();
    const HandleClick = async (v) => {
        // e.preventDefault();
        // setSearchArea(v);
        // let result = await FetchAPI(v)
        // console.log(result);
        console.log(v);
        // return result;
        history.push("/login");
      };

    return (
        <div>
            <div className="search">
            <input  className="searchbar"id='title'></input>
            <button className="searchbutton" 
            onClick={() => HandleClick(document.getElementById('title').value)}
            >Click me!</button>
            </div>
        </div>

    )
}
export default Search