var React = require('react');
var reactRouter = require('react-router');
var menuItems = [
		{name: 'home', href: '/home'},
		{name: 'blog', href: '/blog'},
		{name: 'about', href: '/about'}
	];

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

var App = React.createClass({displayName: "App",
	render: function(){
		return (
			React.createElement("div", {className: "App"}, 
				React.createElement(Menu, {items: menuItems})
			)
			);
	}
});

React.render(React.createElement(App, null), document.body);