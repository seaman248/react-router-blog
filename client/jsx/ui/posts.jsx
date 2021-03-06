var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ThePost = React.createClass({
	render: function(){
		return (
			<div className='post' key={this.props.key}>
			<h3>
				<Link to={this.props.link} params={{id: this.props.id}} >
					{this.props.title}
				</Link>
			</h3>
				<p>{this.props.description}</p>
				<span>{this.props.date}</span>
			</div>
			);
	}
});

var Posts = module.exports = React.createClass({
	render: function(){
		// var propsPosts = this.props.posts;
		var propsPosts = this.props.posts;
		var eachPosts = propsPosts.map(function(post){
				return <ThePost 
						key={post.pathId} 
						link='post'
						id={post.pathId}
						title={post.title} 
						description={post.body} 
						date={post.date}/>
			});
		return (
			<div className='posts'>
				<div className='container'>
					{eachPosts}
				</div>
			</div>
			);
	}
});