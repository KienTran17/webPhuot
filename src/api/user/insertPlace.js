const insertPlace = (token, form) => (
    fetch('https://diphuotclient.herokuapp.com/api/insertplace/' + token, {
        method: 'POST',
        body: form
    })
        .then(res => res.text())
);

export default insertPlace;