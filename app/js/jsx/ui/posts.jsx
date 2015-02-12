var React = require('react');

var ThePost = React.createClass({
	render: function(){
		return (
			<div className='post' key={this.props.key}>
				<h3><a href={this.props.link}>{this.props.title}</a></h3>
				<p>{this.props.description}</p>
			</div>
			);
	}
});

var Posts = module.exports = React.createClass({
	render: function(){
		var eachPosts = [];
		if(this.props.posts){
			this.props.posts.forEach(function(post){
				eachPosts.push(
					<ThePost key={post.title} title={post.title} description={post.description} />
					);
			});
		} else {
			eachPosts.push(
					<ThePost key='testPosts' title='TestPosts' description='Test post description' />
					);
		}
		return (
			<div className='posts'>
				<div className='container'>
					{eachPosts}
				</div>
			</div>
			);
	}
});