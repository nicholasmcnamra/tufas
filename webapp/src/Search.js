import { useState, useEffect } from "react";

function Search() {
    useEffect(() => {
    let searchArea = "Gunks";
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
        fetch(url)
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <div className="search">
                <input type="text" className="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Search