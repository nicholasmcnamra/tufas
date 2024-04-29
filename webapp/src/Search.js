import { useState } from "react";
import { useHistory} from 'react-router-dom';
import FetchAPI from "./openbetaapi";
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
        
        <div>
            <div> {searched && <AreaPage result={result}/>}</div>
            <div className="search">
            <input  className="searchbar"id='title'></input>
            <button className="searchbutton" type="submit"
            onClick={() => HandleClick(document.getElementById('title').value)}
            >Find Climbs</button>
            </div>

        </div>

    )
}
export default Search