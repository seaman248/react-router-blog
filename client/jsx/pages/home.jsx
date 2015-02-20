var React = require('react');

var Slider = require('../ui/slider.jsx');
var Posts = require('../ui/posts.jsx');
var Home = React.createClass({
	render: function(){
		return (
			<div className='homePage'>
				<Slider />
				<Posts />
			</div>
			);
	}
});

module.exports = Home;