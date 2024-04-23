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


async function GetCharacters() {

    let results = await fetch('https://api.openbeta.io/', {
    
        method: 'POST',
    
        headers: {"Content-Type": "application/json"},
    
        body: JSON.stringify({
            query,
            variables: {searchArea},
        })
    })
    
    let characters = await results.json();
    return characters.data.areas
    }


export default GetCharacters

