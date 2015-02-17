var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ThePostHeader = module.exports = React.createClass({
	mixins: [Router.State],
	render: function(){
		var id = this.getParams();
		return(
			<div className='thePostHeader'>
				<Link to='/'> Назад </Link>
				<p>The post Number {id}</p>
			</div>
			);
	}
})