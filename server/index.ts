require('dotenv').config();
const Express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const router = require('./router/router.js')

//authentication:
const cookieParser = require('cookie-parser')
const session = require('express-session');
const SQLLiteStore = require('connect-sqlite3')(session);


const app = Express();
app.use(
    session({
        store: new SQLLiteStore,
        name: 'sessionId',
        saveUninitialized: false,
        resave: false,
        secret: process.env.SECRET,//save into env long run
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, //1 day
            sameSite: true,
            httpOnly: false,
            secure: false,
        },
    })
);

app.use(cookieParser());

app.use(cors()); //how do u decide what corss to allow
app.use(Express.json()); //body parssesr
app.use(morgan('short'));
// app.use(router);

app.listen(process.env.PORT, () => console.log(`listening port${process.env.PORT}`))
