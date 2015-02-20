var mongoose = require('mongoose');
var conf = require('../conf');
mongoose.connect(conf.get('db_connect'));

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

var Post = module.exports.Post = mongoose.model('Post', postSchema);

// // test db init
// for (var i=0, max=100; i<max; i++){
// 	(function(e){
// 		var post = new Post({
// 			pathId: 'testPost_id_'+e,
// 			title: 'Page title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ipsum '+e,
// 			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium dolores unde temporibus nam, suscipit odio optio possimus. Vel dolore, mollitia cupiditate laborum ut totam expedita accusamus deleniti praesentium impedit.',
// 			tags: ['tag1', 'tag2', 'tag3'],
// 		});
// 		post.save(function(err, post){
// 			console.log(post.pathId);
// 		});
// 	})(i);
// }