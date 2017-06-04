const { getListPlace } = require('../../../model/place')
module.exports = (req, res) => {
    getListPlace().then(lstPlace => res.send(lstPlace.rows));
}