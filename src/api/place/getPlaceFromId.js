const getPlaceFromId = (id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getplacefromid/'+id).then(res => res.json())
);

export default getPlaceFromId;