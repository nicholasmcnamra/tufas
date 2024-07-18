import {headerWithAuthentication} from './HeaderVariables';

const CreateClimb = async ( generalArea, specificArea, climb ) => {
    let response;
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const token = `Bearer ${userData.token}`;
    console.log(userData, token);
    console.log("Token: ", token);

    const climbData = {
        climbId: climb.id,
        area: generalArea.area_name,
        areaName: specificArea.area_name,
        climbName: climb.name,
        climbType: null,
        climbDescription: null,
        gradeType: null,
        grade: climb.grades.vscale,
        latitude: specificArea.metadata.lat,
        longitude: specificArea.metadata.lng
    }
    console.log("Climb Data: ", climbData);

    const requestHeaders = headerWithAuthentication(token, climbData);

    return new Promise((resolve, reject) => {
        fetch("http://localhost:8080/api/climbs", requestHeaders)
        .then(response => {
            if (response.ok) {
                resolve(response.json());
            }
            else {
                reject(new Error("Failed to create climb"))
            }
        })
        .catch(error => reject(error));
    }) 

}

export default CreateClimb;