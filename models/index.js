var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactBlog');

var postSchema = new mongoose.Schema({
	pathId: String,
	title: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	},
	tags: [String]
});