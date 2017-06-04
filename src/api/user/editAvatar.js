const editAvatar = (file,token) => (
    fetch('https://diphuotclient.herokuapp.com/api/editavatar/'+token, { 
        method: 'POST',
        body: file
    }).then(res => res.json())
);

export default editAvatar;