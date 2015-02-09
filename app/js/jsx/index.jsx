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

var App = React.createClass({
	render: function(){
		return (
			<div className='App'>
				<Menu items={menuItems} />
				<RouteHandler />
			</div>
			);
	}
});

React.render(<App />, document.body);