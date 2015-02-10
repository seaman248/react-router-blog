var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Items = React.createClass({
	render: function(){
		return (
			<ul>
				<li><Link to="/">home</Link></li>
				<li><Link to="portfolio">portfolio</Link></li>
				<li><Link to="about">about</Link></li>
			</ul>
			);
	}
});

var Menu = React.createClass({
	render: function () {
		return (
			<nav>
				<Items items={this.props.items} />
			</nav>
			);
	}
});

module.exports = Menu;