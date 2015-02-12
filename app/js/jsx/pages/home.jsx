var React = require('react');

var Slider = require('../ui/slider.js');
var Posts = require('../ui/posts.js');
var Home = React.createClass({
	render: function(){
		return (
			<Slider />
			<Posts />
			);
	}
});

module.exports = Home;