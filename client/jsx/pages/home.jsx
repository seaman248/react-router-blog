var React = require('react');
var req = require('superagent');

var Slider = require('../ui/slider.jsx');
var Posts = require('../ui/posts.jsx');


var Home = React.createClass({
	getInitialState: function(){
		return {
			posts: [{some: 'some'}],
		};
	},
	componentDidMount: function(){
		var that = this;
		req.get('/posts')
			.end(function(res){
				that.setState({
					posts: JSON.parse(res.text)
				});
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