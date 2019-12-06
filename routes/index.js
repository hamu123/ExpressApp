const express = require('express');
const router = express.Router();

const  ContactController = require('../app/Controller/ContactController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressApp' });
});

router.get('/contact',ContactController.index);
router.post('/contact-save',ContactController.store);

module.exports = router;
