var React = require('react');

var ReactSlider = require('react-slider');

var Slider = module.exports = React.createClass({displayName: "exports",
	render: function(){
		return (
			React.createElement(ReactSlider, {withBars: true}, 
				React.createElement("div", {className: "divSlider1"}, "1"), 
				React.createElement("div", {className: "divSlider2"}, "2"), 
				React.createElement("div", {className: "divSlider3"}, "3")
			)
			);
	}
});