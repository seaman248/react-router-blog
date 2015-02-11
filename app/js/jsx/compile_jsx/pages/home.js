var React = require('react');

var Slider = require('../ui/slider.js');

var Home = React.createClass({displayName: "Home",
	render: function(){
		return (
			React.createElement(Slider, null)
			);
	}
});

module.exports = Home;