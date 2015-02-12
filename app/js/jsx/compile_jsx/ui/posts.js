var React = require('react');

var Posts = React.createClass({displayName: "Posts",
	render: function(){
		var posts = [];
		this.props.posts.forEach(function(post){
			posts.push(
				React.createElement("div", {className: "post"}, post.title)
				);
		});
		return (
			React.createElement("div", {className: "posts"}, 
				posts
			)
			);
	}
});