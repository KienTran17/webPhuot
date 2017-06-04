const getImageFromPlace = (id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getimagefromplace/'+id).then(res => res.json())
);

export default getImageFromPlace;