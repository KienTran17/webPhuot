const changeAboutMe = (token, hobby, description) => (
    fetch('https://diphuotclient.herokuapp.com/api/changeaboutme', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ token, hobby, description })
    })
        .then(res => res.json())
);

export default changeAboutMe;