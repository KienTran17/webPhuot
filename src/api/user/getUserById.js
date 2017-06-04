const getUserById = (id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getuserbyid/'+id).then(res => res.json())
);

export default getUserById;