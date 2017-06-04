const { checkLogin, changePassword } = require('../../../model/user')
const { verify } = require('../../../config/jwt');
const bycript = require('bcrypt');

module.exports = (req, res) => {
    const { token, newPassword, oldPassword } = req.body;
    verify(token)
        .then(r => {
            checkLogin(r.username, oldPassword)
                .then(isOk => {
                    bycript.hash(newPassword, 10, (err, hash) => {
                        changePassword(r.username, hash)
                            .then(success => {
                                res.send('1')
                            })
                            .catch(err => res.send())
                    })
                })
                .catch(er => res.send())
        })
        .catch(e => res.send());
}