var React = require('react');

var Posts = React.createClass({
	render: function(){

		var posts = [];

		this.props.posts.forEach(function(post){
			posts.push(<div className='post' > {post.title} </div>);
		});

		return (
			<div className='posts'>
				{posts}
			</div>
			);
	}
});