const { changeAboutMe } = require('../../../model/user')
const { verify } = require('../../../config/jwt');

module.exports = (req, res) => {
    const { token, hobby, description } = req.body;
    verify(token)
        .then(  r => {
             changeAboutMe(r.username, hobby, description)
                .then(r => res.send(r.rows[0]))
                .catch(() => res.send())
        })
        .catch(e => res.send());
}