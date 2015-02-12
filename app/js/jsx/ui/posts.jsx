var React = require('react');

var Posts = module.exports = React.createClass({
	render: function(){
		var eachPosts = [];
		if(this.props.posts){
			this.props.posts.forEach(function(post){
				eachPosts.push(
					<div className='post' key={post.title}>
						<h3>{post.title}</h3>
						<p>{post.description}</p>
					</div>
					);
			});
		} else {
			eachPosts.push(
					<div className='post' key='testPostKey'>
						<h3>TestPost</h3>
						<p>Lorem ipsum</p>
					</div>
					);
		}
		return (
			<div className='posts'>
				{eachPosts}
			</div>
			);
	}
});