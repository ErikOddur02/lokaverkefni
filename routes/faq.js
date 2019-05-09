let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('faq', { title: 'Frequently Asked Questions' });
});

module.exports = router;
