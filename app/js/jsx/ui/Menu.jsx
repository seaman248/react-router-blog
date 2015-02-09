var React = require('react');

var Items = React.createClass({
	render: function(){
		var xItems = [];
		this.props.items.forEach(function(menuItem){
			xItems.push(
				<li key={menuItem.name}>
					<a href={menuItem.href}>{menuItem.name}</a>
				</li>
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