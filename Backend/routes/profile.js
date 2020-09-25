const express = require("express");
const router = express.Router();
const passwordHash = require('password-hash');
const pool = require('../pool.js');

router.get('/customer/user_id', (req, res) => {
    let sql = `CALL Customer_get('${req.params.user_id}', NULL);`;
    pool.query(sql, (err, result) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end("Error in Data");
      }
      if (result && result.length > 0 && result[0][0]) {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end(JSON.stringify(result[0]));
      }
    });
  });