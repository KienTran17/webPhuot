const { changeBasicInfor } = require('../../../model/user')
const { verify } = require('../../../config/jwt');

module.exports =   (req, res) => {
    const { token, mobile, first_name, last_name } = req.body;
      verify(token)
        .then(  r => {
              changeBasicInfor(r.username, mobile, first_name, last_name)
                .then(r => res.send(r.rows[0]))
                .catch(() => res.send())
        })
        .catch(e => res.send());
}