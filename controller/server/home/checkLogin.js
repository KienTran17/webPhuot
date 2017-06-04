const { verify } = require('../../../config/jwt');
module.exports = (req, res) => {
    const token = req.params.token;
    if (token) {
        verify(token)
            .then((r) => res.send('1'))
            .catch((e) => {
                res.clearCookie("tk");
                res.send();
            });
    }
    else
        res.send()
}