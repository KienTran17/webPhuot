const register = (txtFirstName, txtLastName, txtUsername, txtEmail, txtPassword) => (
    fetch('https://diphuotclient.herokuapp.com/api/register', { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ txtFirstName, txtLastName, txtUsername, txtEmail, txtPassword })
    })
    .then(res => res.json())
);

export default register;