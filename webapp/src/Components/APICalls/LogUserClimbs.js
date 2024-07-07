const LogUserClimbs = async ( generalArea, specificArea, climb ) => {
    let response;
    let token = localStorage.getItem('token');

    try {
        const climbData = {
            id: climb.id,
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
        
        response = await fetch("http://localhost:8080/api/climbs", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            authorization: `Bearer ${token}`,
            body: JSON.stringify({climbData})
        });

        if (!response.ok) {
            throw new Error("Network response not okay.");
        }

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Error fetching data ", error);
    }
}

export default LogUserClimbs;