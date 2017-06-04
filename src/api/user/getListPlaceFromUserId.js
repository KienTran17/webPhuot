const getListPlaceFromUserId = (id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getlistplacefromuserid/'+id).then(res => res.json())
);

export default getListPlaceFromUserId;