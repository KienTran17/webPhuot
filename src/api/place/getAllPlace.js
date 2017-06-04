const getAllPlace = () => (
    fetch('https://diphuotclient.herokuapp.com/api/getallplace').then(res => res.json())
);

export default getAllPlace;