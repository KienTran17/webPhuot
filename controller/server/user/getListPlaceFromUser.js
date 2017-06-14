const { getListPlaceFromUser } = require('../../../model/place')
const { verify } = require('../../../config/jwt');
module.exports = (req, res) => {
    const { token } = req.params;
    const { id } = req.params;
    verify(token)
        .then( (r) => {
             getListPlaceFromUser(id).then(lst => res.send(lst.rows));
        })
        .catch((e) => {
            //res.clearCookie("tk");
            res.send('LOI GET PLACE')
        });
}