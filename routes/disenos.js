var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('disenos', { title: 'Diseños' });
});

module.exports = router;