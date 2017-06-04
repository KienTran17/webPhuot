const express = require('express');
const app = express();

const session = require('express-session');
const cookieParser = require('cookie-parser');
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://phuotserver.herokuapp.com" || "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS, HEAD");
//     res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials: true");
//     res.header("Content-Type", "application/json");
//     // /res.header("Accept", "application/json");
//     next();
// });
//let parser = require('body-parser').urlencoded({ extended: false });
const jsonParser = require('body-parser').json();
app.use(cookieParser());
let server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(session({
    secret: 'sh72cjs2c92du82asdfasdfsfdadhfd',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 900000
    }
}));
const { insertComment } = require('./model/comment');
const { getUserById } = require('./model/user');


//gói body-parser lấy dữ liệu từ form (POST) trong ejs

//sử dụng gói ejs tạo trang html
app.set('view engine', 'ejs');
app.set('views', './views'); //views

app.use(express.static('public'));

app.get('/api/checklogin/:token', require('./controller/server/home/checkLogin'));
app.post('/api/login', jsonParser, require('./controller/server/home/login'));
app.post('/api/handleuser', jsonParser, require('./controller/server/user/handleUser'));
app.post('/api/register', jsonParser, require('./controller/server/home/register'));
app.get('/api/getallplace', require('./controller/server/place/getAllPlace'));
app.get('/api/getuserbyid/:id', require('./controller/server/user/getUserById'));
app.get('/api/getimagefromplace/:id', require('./controller/server/image/getImageFromPlace'));
app.get('/api/getplacefromid/:id', require('./controller/server/place/detailPlace'));
app.get('/api/getuserbyusername/:token', require('./controller/server/user/getUserByUserName'));
app.get('/api/getlistplacefromuser/:token/:id', require('./controller/server/user/getListPlaceFromUser'));
app.post('/api/insertplace/:token', jsonParser, require('./controller/server/user/insertPlace'));
app.get('/api/logout', jsonParser, require('./controller/server/user/logout'));
app.get('/api/getcity', jsonParser, require('./controller/server/place/getCity'));
app.get('/api/getward', jsonParser, require('./controller/server/place/getWard'));
app.post('/api/changepassword', jsonParser, require('./controller/server/user/changePassword'));
app.post('/api/changebasicinfor', jsonParser, require('./controller/server/user/changeBasicInfor'));
app.post('/api/changeaboutme', jsonParser, require('./controller/server/user/changeAboutMe'));
app.get('/api/getlistplacefromuserid/:id', require('./controller/server/user/getListPlaceFromUserId'));
app.get('/api/getcommentplace/:id', require('./controller/server/comment/getCommentPlace'));
app.post('/api/editavatar/:token',jsonParser,require('./controller/server/user/editAvatar' ));
//app.post('/api/insertcomment/',jsonParser, require('./controller/server/comment/insertComment'));
app.post('/api/checkfacebook/',jsonParser,require('./controller/server/user/checkFacebook' ));
app.get('*', require('./controller/home'));

io.on('connection', function (socket) {
    //socket.emit('news', { hello: 'world' });
    socket.on('INSERT_COMMENT', function (data) {
        var now = new Date();
        var date = now.toJSON();
        console.log(data)
        insertComment(data.content, data.place_id, data.user_id, date).then(r => {
            getUserById(data.user_id).then(user => {
                io.emit('COMMENT', {content: r.rows[0].content, date_created: date, avatar:user.rows[0].avatar, first_name: user.rows[0].first_name, last_name:user.rows[0].last_name})
            })
        })
    });
});
server.listen(process.env.PORT || '3000');
