var React = require('react');
var req = require('superagent');

var Slider = require('../ui/slider.jsx');
var Posts = require('../ui/posts.jsx');


var Home = React.createClass({
	getInitialState: function(){
		return {
			posts: [],
		};
	},
	componentDidMount: function(){
		req.get('/posts')
			.end(function(res){
				this.setState({
					posts: res
				}).bind(this);
				console.log(res);
			});
	},
	render: function(){
		return (
			<div className='homePage'>
				<Slider />
				<Posts posts={this.state.posts} />
			</div>
			);
	}
});

module.exports = Home;