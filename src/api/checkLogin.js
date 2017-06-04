const checkLogin = (token) => (
    fetch('https://diphuotclient.herokuapp.com/api/checklogin/'+token).then(res => res.text())
    .then(text => {
        if (text) return true;
        return false;
    })
);

export default checkLogin;