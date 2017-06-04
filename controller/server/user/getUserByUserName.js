const { getUserByUsername } = require('../../../model/user');
const { verify } = require('../../../config/jwt');
module.exports = (req, res) => {
    const { token } = req.params;
    verify(token)
        .then(  (r) => {
              getUserByUsername(r.username).then(user => res.send(user.rows[0]));
        })
        .catch((e) => {
            res.clearCookie("tk");
            res.send('LOI GET USER')
        });


}