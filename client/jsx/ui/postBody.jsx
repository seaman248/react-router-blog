var React = require('react');
var req = require('superagent');

var getPostById = function(id, cb){
	req.get('/post/'+id)
		.end(function(res){
			cb(res.text);
		});
};

var PostBody = module.exports = React.createClass({
	render: function(){
		return (
			<div className='postBody'>
				<h1>this.props.postId</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique praesentium dolores unde temporibus nam, suscipit odio optio possimus. Vel dolore, mollitia cupiditate laborum ut totam expedita accusamus deleniti praesentium impedit.</p>
			</div>
		);
	}
})