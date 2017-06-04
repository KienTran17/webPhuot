const getAllCity = () => (
    fetch('https://diphuotclient.herokuapp.com/api/getcity/').then(res => res.json())
);

export default getAllCity;