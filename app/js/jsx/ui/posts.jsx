var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ThePost = React.createClass({
	render: function(){
		return (
			<div className='post' key={this.props.key}>
			<h3><Link to={this.props.link}>{this.props.title}</Link></h3>
				<p>{this.props.description}</p>
				<span>{this.props.date}</span>
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
					<ThePost 
						key={post.title} 
						title={post.title} 
						description={post.description} 
						date={post.date}/>
					);
			});
		} else {
			eachPosts.push(
					<ThePost 
						key='testPosts' 
						link='/post/test'
						title='No posts yet' 
						description='There is no post yet, but this test preview about this fact'
						date='Два дня назад' />
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