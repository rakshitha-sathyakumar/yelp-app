const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');


var app = express();


router.get('/appetizer/:rest_id', (req, res) => {
    let sql = `SELECT * FROM react_sql.dishes where category = 'Appetizer' and rest_id = '${req.params.rest_id}'`
    pool.query (sql, (err, result) => {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end("Error in Data");
        } else {
            console.log(JSON.stringify(result))
            res.end(JSON.stringify(result));
        }
    });
});

module.exports=router;
