var React = require('react');
var Router = require('react-router');

var ThePostHeader = module.exports = React.createClass({
	mixins: [Router.State],
	render: function(){
		var id = this.getParams().id;
		return(
			<div className='thePostHeader'>
				<p>The post Number {id}</p>
			</div>
			);
	}
})