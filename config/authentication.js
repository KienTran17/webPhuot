const { verify } = require('./jwt');
const cookieParser = require('cookie-parser');

const authentication = (req, res, next) => {
    //const token = req.cookies.tk_lg;
    verify(token)
        .then(r => {
            //console.log('ok ne');
            req.session.username = r.username+'';
            console.log(req.session.username);
            next();
        })
        .catch((e) => {
            console.log('loi: '+ e);
            cookie = req.cookies;
            for (var prop in cookie) {
                if (!cookie.hasOwnProperty(prop)) {
                    continue;
                }
                res.cookie(prop, '', { expires: new Date(0) });
            }
            res.redirect('./')
        });
}

module.exports = authentication;