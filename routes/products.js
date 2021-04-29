const router = require('express').Router()
const mysqlConnection = require('../connection')

router.get('/',(req, res) => {
    mysqlConnection.query('SELECT * FROM products;', (err, rows, fields) => {
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }
    })
})

module.exports = router;