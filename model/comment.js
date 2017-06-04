const queryDB = require('./db');

const insertComment = (content, place_id, user_id, date) => (
    queryDB(`INSERT INTO public.comment(
	content, place_id, user_id, date_created)
	VALUES ( $1, $2, $3, $4) returning *`,
        [content, place_id, user_id, date])
);

const getCommentPlace = (id) => (
    queryDB(`SELECT comment.content, comment.date_created, "user".avatar, "user".first_name, "user".last_name 
    FROM "user", comment 
    WHERE comment.user_id = "user".id and comment.place_id = $1;`,[id])
);
module.exports = { insertComment, getCommentPlace};