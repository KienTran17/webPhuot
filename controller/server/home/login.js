const { checkLogin } = require('../../../model/user');
const { sign } = require('../../../config/jwt');
module.exports = (req, res) => {
    const { username, password } = req.body;
    checkLogin(username, password).then(result => {
        sign({ username }).then(token => {
            req.session.username = username;
            res.cookie('tk', token, { expires: new Date(Date.now() + 900000)}).send('1');
        }).catch((e)=>console.log('loi ' + e));
    })
        .catch((e) => res.send('0'));
} 