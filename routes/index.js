const express = require('express');
const router = express.Router();

const  ContactController = require('../app/Controller/ContactController');
const PostController = require('../app/Controller/PostController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressApp' });
});

router.get('/post', PostController.index);
router.get('/post/:slug', PostController.show);

router.get('/contact',ContactController.index);
router.post('/contact-save',ContactController.store);

module.exports = router;
