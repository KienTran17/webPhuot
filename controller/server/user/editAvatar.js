const getArrayUpload = require('../../../upload');
const { verify } = require('../../../config/jwt');
const { editAvatar } = require('../../../model/user');

module.exports = (req, res) => {
    const token = req.params.token;
    verify(token).then( r => {
         getArrayUpload('avatar-1')(req, res,  (err) => {
            if (err) {
                res.send();
            }
            else {
                editAvatar(r.username, '/upload/' + req.files[0].filename)
                    .then(user => {
                        res.send(user.rows[0]);
                    })
                    .catch(er => res.send())
            }
        })
    })

}