const changePassword = (token, newPassword, oldPassword) => (
    fetch('https://diphuotclient.herokuapp.com/api/changepassword', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ token, oldPassword, newPassword })
    })
        .then(res => res.text())
);

export default changePassword;