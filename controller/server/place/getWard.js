const { getAllWard } = require('../../../model/ward')
module.exports = (req, res) => {
    getAllWard().then(ward => res.send(ward.rows));
}