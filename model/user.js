const queryDB = require('./db');
const bycript = require('bcrypt');

const checkLogin = (u, p) => (
    new Promise((resolve, reject) => {
        sql = `SELECT username,password
                FROM public."user" 
                WHERE username=$1 Or email =$1`;
        queryDB(sql, [u])
            .then(result => {
                bycript.compare(p, result.rows[0].password, (err, res) => {
                    if (err) reject(err);
                    if (!res) reject(err);
                    resolve(res);
                });
            }).catch((r) => reject(false));
    })
)
const changeAboutMe = (email, hobby, description) => (
    queryDB(`UPDATE public."user" SET hobby=$2, description=$3 WHERE email = $1 returning id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile,hobby`, [email, hobby, description])
)
const changeBasicInfor = (email, mobile, first_name, last_name) => (
    queryDB(`UPDATE public."user" SET mobile=$1, first_name=$2, last_name=$3 WHERE
     email = $4 returning id, first_name, last_name, email, view, "like", avatar, 
     link_facebook, facebook_id, google_id, description, mobile,hobby`,
        [mobile, first_name, last_name, email])
)

const changePassword = (username, newPassword) => (
    queryDB(`UPDATE public."user" SET password=$2 WHERE email = $1`, [username, newPassword])
)
const getUserByUsername = (username) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile, hobby
	FROM public."user" where username = $1 or email = $1`, [username])
)

const insertUser = (first_name, last_name, username, email, password) => (
    queryDB(`INSERT INTO public."user"(
	first_name, last_name, username, email, password, avatar)
	VALUES ($1,$2,$3,$4,$5,$6) returning id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile,hobby;`, [first_name, last_name, username, email, password, '../asset/img/user.png'])
)

const insertUserFb = (first_name, last_name, email, avatar, link_facebook, facebook_id, password) => (
    //first_name, last_name, email, view, "like", avatar, link_facebook,
    // album_id, journey_id, place_id, username, password, facebook_id, google_id
    queryDB(`INSERT INTO public."user"(
	first_name, last_name, email, avatar, link_facebook, facebook_id,password)
	VALUES ($1,$2,$3,$4,$5,$6,$7) returning id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile,hobby`, [first_name, last_name, email, avatar, link_facebook, facebook_id, password])
)

const checkExistAccount = (email, facebook_id) => (
    //first_name, last_name, email, view, "like", avatar, link_facebook,
    // album_id, journey_id, place_id, username, password, facebook_id, google_id
    queryDB(`SELECT first_name, last_name, email, facebook_id 
	FROM public."user" where email = $1 or facebook_id = $2`, [email, facebook_id])
)
const checkFacebook = (facebook_id) => (
    //first_name, last_name, email, view, "like", avatar, link_facebook,
    // album_id, journey_id, place_id, username, password, facebook_id, google_id
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile,hobby
	FROM public."user" where facebook_id = $1`, [facebook_id])
)

const getUserById = (id) => (
    queryDB(`SELECT id, first_name, last_name, email, view, "like", avatar, link_facebook, username, facebook_id, google_id,description, mobile,hobby
	FROM public."user" where id = $1`, [id])
)

const editAvatar = (username, avatar) => (
    queryDB(`UPDATE public."user"
	SET avatar= $1
	WHERE email=$2 returning id, first_name, last_name, email, view, "like", avatar, link_facebook, facebook_id, google_id, description, mobile,hobby`, [avatar, username])
)
//insertUser('thanh', 'xuan', 'thanhxuan', 'thanhxuan@gmail.com', '123456').then(r => console.log(r)).catch(e => console.log(e + ''));
//checkLogin('kientran','5465123456').then(res=>console.log(res));
module.exports = { checkFacebook, changeAboutMe, changeBasicInfor, changePassword, editAvatar, getUserById, checkLogin, getUserByUsername, insertUser, checkExistAccount, insertUserFb };

