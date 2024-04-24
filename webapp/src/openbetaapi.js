let searchArea = "The Gunks";

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
}
await FetchAPI();


export default FetchAPI