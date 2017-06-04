const { getListPlaceFromUser } = require('../../../model/place')
const { verify } = require('../../../config/jwt');
module.exports = (req, res) => {
    const { id } = req.params;
    getListPlaceFromUser(id).then(lst => res.send(lst.rows));
}