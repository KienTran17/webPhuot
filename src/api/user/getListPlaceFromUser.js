const getListPlaceFromUser = (token,id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getlistplacefromuser/'+token+'/'+id).then(res => res.json())
);

export default getListPlaceFromUser;