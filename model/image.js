const queryDB = require('./db');

const insertImage = (name, link, view, like, user_id, place_id, date) => (
    queryDB(`insert into "image" ( name, link, view,
     "like", user_id, place_id, date_create) values ( $1, $2, $3, $4, $5, $6, $7) `,
        [name, link, 0, 0, user_id, place_id, date])
);

const getImageFromPlace = (place_id) => (
    queryDB(`select * from "image" where place_id = $1`,[place_id])
);
module.exports = { insertImage, getImageFromPlace};