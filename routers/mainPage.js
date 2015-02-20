var express = require('express');
var router = express.Router();
var Post = require('../models').Post;

router.get('/', function(req, res){
	res.render('index');
});

router.get('/posts', function(req, res){
	Post.find(function(err, posts){
		res.json(posts);
	});
});

router.get('/post/:id', function(req, res){
	Post.findOne({
		'pathId': req.params.id
	}, function(err, post){
		res.json(post);
	});

})

module.exports = router;