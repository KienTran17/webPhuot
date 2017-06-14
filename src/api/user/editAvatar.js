const editAvatar = (file) => (
    fetch('https://diphuotclient.herokuapp.com/api/editavatar/', {
        method: 'POST',
        credentials: 'include',
        body: file
    }).then(res => res.json())
);

export default editAvatar;