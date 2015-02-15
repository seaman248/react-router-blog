var React = require('react');

var Slider = require('../ui/slider.js');
var Posts = require('../ui/posts.js');
var Home = React.createClass({displayName: "Home",
	render: function(){
		return (
			React.createElement("div", {className: "homePage"}, 
				React.createElement(Slider, null), 
				React.createElement(Posts, null)
			)
			);
	}
});

module.exports = Home;