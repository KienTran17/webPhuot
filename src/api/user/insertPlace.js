const insertPlace = (form) => (
    fetch('https://diphuotclient.herokuapp.com/api/insertplace', {
        method: 'POST',
        credentials: 'include',
        body: form
    })
        .then(res => res.text())
);

export default insertPlace;