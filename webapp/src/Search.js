import { useState, useEffect } from "react";
import FetchAPI from "./openbetaapi";

const Search = () => {
    let [searchArea, setSearchArea] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchArea(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        console.log(`Searching for ${searchArea}...`);
      }

    useEffect(() => {
    let query = ` query GetGunks($searchArea: String!)
    {  areas(filter: {area_name: {match: $searchArea}}) {
        area_name
        children {
        area_name 
        climbs {
            name 
            grades {
                vscale
            }
            content {
                description
                location
                protection
            }
        }  
        }
    }}`;

    const url = 'https://api.openbeta.io/';

    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query,
        variables: {searchArea}
    })
    };

const FetchAPI = async () => {
  try {

    const result = await fetch(
      url,
      options
    );

    const data = await result.json();
    return data;

  } catch (err) {
    console.info(err)
  }
}}, [])

    return (
        <div>
            <div className="search">
                <form method="post" onSubmit={handleSubmit}></form>
                <input type="text" value={searchArea} onChange={handleChange} />
                {console.log(FetchAPI(searchArea))}
            </div>
        </div>
    )
}
export default Search