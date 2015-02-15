var React = require('react');

var ThePost = React.createClass({displayName: "ThePost",
	render: function(){
		return (
			React.createElement("div", {className: "post", key: this.props.key}, 
				React.createElement("h3", null, React.createElement("a", {href: this.props.link}, this.props.title)), 
				React.createElement("p", null, this.props.description), 
				React.createElement("span", null, this.props.date)
			)
			);
	}
});

var Posts = module.exports = React.createClass({displayName: "exports",
	render: function(){
		var eachPosts = [];
		if(this.props.posts){
			this.props.posts.forEach(function(post){
				eachPosts.push(
					React.createElement(ThePost, {
						key: post.title, 
						title: post.title, 
						description: post.description, 
						date: post.date})
					);
			});
		} else {
			eachPosts.push(
					React.createElement(ThePost, {
						key: "testPosts", 
						title: "No posts yet", 
						description: "There is no post yet, but this test preview about this fact", 
						date: "Два дня назад"})
					);
		}
		return (
			React.createElement("div", {className: "posts"}, 
				React.createElement("div", {className: "container"}, 
					eachPosts
				)
			)
			);
	}
});