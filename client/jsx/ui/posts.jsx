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
		var eachPosts = [];
		this.props.posts.forEach(function(post){
			eachPosts.push(
				<ThePost 
					key={post.id} 
					link={post.link}
					id={post.id}
					title={post.title} 
					description={post.description} 
					date={post.date}/>
				);
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