const checkFacebook = (facebook_id) => (
    fetch('https://diphuotclient.herokuapp.com/api/checkfacebook', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ facebook_id })
    })
    .then(res =>res.json())
);

export default checkFacebook;