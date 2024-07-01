import { useState } from "react";
import { useHistory} from 'react-router-dom';
import FetchAPI from "../APICalls/openbetaapi";
import AreaPage from "./AreaPage";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    let [result, setResult] = useState(null);
    const [searched, setSearched] = useState(false);
    let history = useHistory();

    const HandleClick = async (v) => {
        setSearchArea(v);
        setSearched(true);
        let aPIResult = await FetchAPI(v);
        setResult(aPIResult);
        history.push(`/arealist?search=${v}`);
      };

    return (
    
        <div className="searchbar-container" data-testid="searchbar-1">
            <div> {searched && <AreaPage result={result}/>}</div>
            <div className="search">
            <input  className="searchbar" data-testid="input-1" id='title'></input>
            <button className="searchbutton" data-testid="submit-1" type="submit"
            onClick={() => HandleClick(document.getElementById('title').value)}
            >Find Climbs</button>
            </div>

        </div>

    )
}
export default Search