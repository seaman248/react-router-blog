var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
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
				React.createElement(Menu, {items: menuItems}), 
				React.createElement(RouteHandler, null)
			)
			);
	}
});

React.render(React.createElement(App, null), document.body);