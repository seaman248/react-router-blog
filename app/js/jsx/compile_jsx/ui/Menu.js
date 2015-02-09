var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Items = React.createClass({displayName: "Items",
	render: function(){
		var xItems = [];
		this.props.items.forEach(function(menuItem){
			xItems.push(
				React.createElement("li", null, React.createElement(Link, {to: menuItem.href}, menuItem.name))
			);
		})
		return (
			React.createElement("ul", null, 
				xItems
			)
			);
	}
});

var Menu = React.createClass({displayName: "Menu",
	render: function () {
		return (
			React.createElement("nav", null, 
				React.createElement(Items, {items: this.props.items})
			)
			);
	}
});

module.exports = Menu;