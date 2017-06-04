const queryDB = require('./db');

const getListPlace = () => (
    queryDB(`select * from "place"`, [])
);

const getPlaceFromId = (id) => (
    queryDB(`select * from "place" where id = $1`, [id])
);

const getListPlaceFromUser = (id) => (
    queryDB(`select * from "place" where user_id = $1`, [id])
);

const upView = (id) => (
    queryDB(`UPDATE public."place" SET view = view + 1 WHERE id = $1`, [id])
)

const addPlace = (name, address, status, city_id,
    ward_id, lat, lng, description, date_create, user_id, treckking, camping, seeview, claimb) => (
        queryDB(`insert into "place" (name, address, status, city_id, 
        ward_id, lat, lng, description, date_create, user_id, treckking, camping, seeview, claimb) values
         ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) returning id`, [name, address, status, city_id,
                ward_id, lat, lng, description, date_create, user_id, treckking, camping, seeview, claimb])
    )

module.exports = {upView, addPlace, getListPlace, getPlaceFromId, getListPlaceFromUser };