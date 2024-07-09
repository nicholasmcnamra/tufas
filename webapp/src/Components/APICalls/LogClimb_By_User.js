const LogClimbByUser = async (userId, climbId, area) => {
    let response;
    const userData = JSON.parse(sessionStorage.getItem('user'));
    const token = `Bearer ${userData.token}`;

    const logClimbData = {
        area: area
    }
    console.log(userData, logClimbData);
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/api/${climbId}/addUserClimb/${userId}`, {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type':'application/json',
                'Authorization': token
            },
            body: JSON.stringify(logClimbData)
        })
        .then(response => {
            if(response.ok) {
                resolve(response.json());
            }
            else {
                reject(new Error("Failed to log climb by user."))
            }
        })
        .catch(error => reject(error));
    });
}


export default LogClimbByUser;