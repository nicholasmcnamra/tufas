export const headerWithAuthentication = (token, climbData) => {
    return (
    {mode: 'cors',
    method: 'POST',
    headers: {'Content-Type':'application/json',
            'Authorization' : token
    },
    body: JSON.stringify(climbData)
})};
