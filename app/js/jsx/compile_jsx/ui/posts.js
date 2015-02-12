var React = require('react');

var Posts = module.exports = React.createClass({displayName: "exports",
	render: function(){
		var eachPosts = [];
		if(this.props.posts){
			this.props.posts.forEach(function(post){
				eachPosts.push(
					React.createElement("div", {className: "post", key: post.title}, 
						React.createElement("h3", null, post.title), 
						React.createElement("p", null, post.description)
					)
					);
			});
		} else {
			eachPosts.push(
					React.createElement("div", {className: "post", key: "testPostKey"}, 
						React.createElement("h3", null, "TestPost"), 
						React.createElement("p", null, "Lorem ipsum")
					)
					);
		}
		return (
			React.createElement("div", {className: "posts"}, 
				eachPosts
			)
			);
	}
});