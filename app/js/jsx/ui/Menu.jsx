var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Items = React.createClass({
	render: function(){
		var xItems = [];
		this.props.items.forEach(function(menuItem){
			xItems.push(
				<li><Link to={menuItem.href}>{menuItem.name}</Link></li>
			);
		})
		return (
			<ul>
				{xItems}
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