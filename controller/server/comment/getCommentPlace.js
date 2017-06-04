const { getCommentPlace } = require('../../../model/comment')
module.exports = (req, res) => {
    const id = req.params.id;
    getCommentPlace(id).then(place => res.send(place.rows)).catch(e=>res.send());
}