const LogUserClimbs = async ( generalArea, specificArea, climb ) => {
    let response;
    const userData = sessionStorage.getItem('user');
    const userDataString = JSON.parse(userData);
    const token = `Bearer ${userDataString.token}`;
    console.log(userDataString, token);

    try {

        console.log("Token: ", token);
        const climbData = {
            climbId: climb.id,
            area: generalArea.area_name,
            areaName: specificArea.area_name,
            climbName: climb.name,
            climbType: null,
            climbDescription: climb.content.description,
            gradeType: null,
            grade: climb.grades.vscale,
            latitude: specificArea.metadata.lat,
            longitude: specificArea.metadata.lng
        }
        console.log("Climb Data: ", climbData);
        
        response = await fetch("http://localhost:8080/api/climbs", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json',
                    'Authorization' : token
            },
            body: JSON.stringify(climbData)
        });

        if (!response.ok) {
            console.log("Token: ", token);
            throw new Error("Network response not okay.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log(userData);
        console.log("Token: ", token);
    }
}

export default LogUserClimbs;