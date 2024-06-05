let query = ` query GetGunks($searchArea: String!)
{
  areas(filter: {area_name: {match: $searchArea}}) {
    area_name
    children {
      areaName
      children {
        area_name
        climbs {
            id
            name
            grades {
                vscale
            }
            content {
                description
                protection
            }
        }
      }
      metadata {
        lat
        lng
      }
    }
  }
}`;


const url = 'https://stg-api.openbeta.io';

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query,
//     variables: {searchArea}
//   })
// };

const TestFetchAPI = async (searchArea) => {
  try {

    const result = await fetch(
      url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {searchArea}
      })
      }
    );

    const data = await result.json();
    return data;

  } catch (err) {
    console.info(err)
  }
}


export default TestFetchAPI