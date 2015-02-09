var React = require('react');
var reactRouter = require('react-router');
var Menu = require('./ui/Menu.js');
var menuItems = [
		{name: 'home', href: '/home'},
		{name: 'blog', href: '/blog'},
		{name: 'about', href: '/about'}
	];

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