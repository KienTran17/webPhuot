const getUserByUsername = (token) => (
    fetch('https://diphuotclient.herokuapp.com/api/getuserbyusername/'+token).then(res => res.json())
);

export default getUserByUsername;