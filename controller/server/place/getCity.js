const { getAllCity } = require('../../../model/city')
module.exports = (req, res) => {
    getAllCity().then(city => res.send(city.rows));
}