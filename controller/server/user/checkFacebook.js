const { checkFacebook } = require('../../../model/user');
const { sign } = require('../../../config/jwt');

module.exports = (req, res) => {
    const { facebook_id } = req.body;
    checkFacebook(facebook_id).then(r => {
        sign({ username:r.rows[0].email  }).then(token => {
            res.cookie('tk', token, { expires: new Date(Date.now() + 900000) }).send(r.rows[0])
        })
    }).catch(e => res.send());
}