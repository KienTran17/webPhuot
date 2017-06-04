const { getPlaceFromId } = require('../../../model/place')
module.exports = (req, res) => {
    const {id} = req.params;
    getPlaceFromId(id).then(place => res.send(place.rows[0]));
}