const logout = () => (
    fetch('https://diphuotclient.herokuapp.com/api/logout', {
        method: 'GET',
        credentials: 'include'
    })
    .then(res => res.text())
);

export default logout;