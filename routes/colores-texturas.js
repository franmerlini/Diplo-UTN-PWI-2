var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('colores-texturas', { title: 'Colores y Texturas' });
});

module.exports = router;