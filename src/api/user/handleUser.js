const handleUser = (data) => (
    fetch('https://diphuotclient.herokuapp.com/api/handleuser', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ data })
    })
    .then(res =>res.json())
);

export default handleUser;