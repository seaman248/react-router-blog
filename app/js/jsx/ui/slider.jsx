var React = require('react');

var ReactSlider = require('react-slider');

var Slider = module.exports = React.createClass({
	render: function(){
		return (
			<ReactSlider withBars>
				<div className='divSlider1'>1</div>
				<div className='divSlider2'>2</div>
				<div className='divSlider3'>3</div>
			</ReactSlider>
			);
	}
});