const getCommentPlace = (id) => (
    fetch('https://diphuotclient.herokuapp.com/api/getCommentPlace/'+id).then(res => res.json())
);

export default getCommentPlace;