export const headerWithAuthentication = (body, method, token) => {
    return (
    {
        mode: 'cors',
        method: `${method}`,
        headers: {'Content-Type':'application/json',
                'Authorization' : token},
        body: JSON.stringify(body)
})};

export const headerWithoutAuthentication = (body, method) => {
    return (
        {
            mode: 'cors',
            method: `${method}`,
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(body)
        }
    )
};

export const headerWithoutBodyWithAuthentication = (method, token) => {
    return (
        {
            mode: 'cors',
            method: `${method}`,
            headers: {'Content-Type':'application/json',
                'Authorization' : token}
        }
    )
};