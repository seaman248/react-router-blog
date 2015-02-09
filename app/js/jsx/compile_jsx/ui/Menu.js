var React = require('react');

var Items = React.createClass({displayName: "Items",
	render: function(){
		var xItems = [];
		this.props.items.forEach(function(menuItem){
			xItems.push(
				React.createElement("li", {key: menuItem.name}, 
					React.createElement("a", {href: menuItem.href}, menuItem.name)
				)
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