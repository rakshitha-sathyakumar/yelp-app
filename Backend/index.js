const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(session({
    secret: 'cmpe273_kafka_passport_mongo',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,
         // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

const selectAll = 'SELECT * from products';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Alohomora@95',
    database: 'react-sql'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from the upside down")

})

app.get('/home', (req, res) => {

});

app.get('/signup', (req, res) => {
    const { first_name, last_name, email, password, zip_code, birthday } = req.query;
    const insert_customer_details_query = `INSERT INTO customer_data(first_name, last_name, email, password, zip_code, birthday) VALUES(
    ${ first_name }, ${last_name}, ${email}, ${password}, ${zip_code}, ${birthday})`
    connection.query(insert_customer_details_query, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send("SignUp successful")
        }
    })

});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});