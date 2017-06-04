const getArrayUpload = require('../../../upload');
const { checkExistAccount, insertUserFb, getUserByUsername } = require('../../../model/user');
const { addPlace } = require('../../../model/place');
const { insertImage } = require('../../../model/image');
const { sign } = require('../../../config/jwt');
const bycript = require('bcrypt');

module.exports = (req, res) => {
    const { data } = req.body;
    checkExistAccount(data.email, data.id).then(r => {
        if (r.rows.length === 0) {
            bycript.hash('123456', 10, (err, hash) => {
                 insertUserFb(data.first_name, data.last_name, data.email, data.picture.data.url, data.link, data.id, hash).then(  user => {
                    const username = data.email;
                     sign({ username }).then(token => {
                        //console.log(token);
                        req.session.username = username;
                        res.cookie('tk', token, { expires: new Date(Date.now() + 900000) }).send(user);
                        //res.redirect('http://localhost:3000/');
                    });
                })
                    .catch(er => console.log(er + ''));
            })
        }
        else {
            const username = data.email;
            console.log(username);
              sign({ username }).then(  token => {
                //console.log(token);
                req.session.username = username;
                  getUserByUsername(username).then(user =>
                    res.cookie('tk', token, { expires: new Date(Date.now() + 900000) }).send(user));

                //res.redirect('http://localhost:3000/');
            });
        }
    }).catch(e => console.log(e + ''));
}