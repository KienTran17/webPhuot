const { getImageFromPlace } = require('../../../model/image')
module.exports = (req, res) => {
    const { id } = req.params;
    getImageFromPlace(id).then(lstImage => res.send(lstImage.rows));
}