const getImageFromPlace = (id) => (
    fetch('https://diphuotclient.herokuapp.com/getimagefromplace/'+id).then(res => res.json())
);

export default getImageFromPlace;