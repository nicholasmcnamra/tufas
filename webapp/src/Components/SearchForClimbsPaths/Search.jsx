import { useState } from "react";
import FetchAPI from "../APICalls/openbetaapi";
import AreaPage from "./AreaPage";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    let [result, setResult] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleClick = async () => {
        setSearched(true);
        let apiResult = await FetchAPI(searchArea);
        setResult(apiResult);
        console.log(apiResult);
      };

    return (
    
        <div className="searchbar-container" data-testid="searchbar-1">
            <div> {searched && <AreaPage result={result}/>}</div>
            <div className="search">

            <input  
            className="searchbar" 
            data-testid="input-1" 
            id='title'
            value={searchArea}
            onChange={(e) => setSearchArea(e.target.value)}
            >
            </input>

            <button 
            className="searchbutton" 
            data-testid="submit-1" 
            type="submit"
            onClick={handleClick}
            >
                Find Climbs
            </button>
            </div>

        </div>

    )
}
export default Search