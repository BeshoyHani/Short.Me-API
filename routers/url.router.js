const router = require('express').Router();
const URLController = require('../controllers/url.controller.js');
const bodyParser = require('body-parser').urlencoded({extended: true});

router.use(bodyParser);

router.post('/short', URLController.create_short_url);

router.get('/:urlID', URLController.get_original_url);

module.exports = router;
