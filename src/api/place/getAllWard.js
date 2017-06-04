const getAllWard = () => (
    fetch('https://diphuotclient.herokuapp.com/api/getward/').then(res => res.json())
);

export default getAllWard;