const { getUserById } = require('../../../model/user')
module.exports = (req, res) => {
    const {id} = req.params;
    getUserById(id).then(lstUser => res.send(lstUser.rows[0]));
}