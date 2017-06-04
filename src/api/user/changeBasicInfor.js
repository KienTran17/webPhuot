const changeBasicInfor = (token, mobile, first_name, last_name) => (
    fetch('https://diphuotclient.herokuapp.com/api/changebasicinfor', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ token, mobile, first_name, last_name })
    })
        .then(res => res.json())
);

export default changeBasicInfor;