var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Menu = require('./ui/Menu.js');

var Home = require('./pages/home.js');

var Portfolio = React.createClass({displayName: "Portfolio",
	render: function(){
		return (React.createElement("p", null, "Portfolio"));
	}
});

var About = React.createClass({displayName: "About",
	render: function(){
		return (React.createElement("p", null, "About"));
	}
});

var App = React.createClass({displayName: "App",
	render: function(){
		return (
			React.createElement("div", {className: "App"}, 
				React.createElement(Menu, null), 
				React.createElement(RouteHandler, null)
			)
			);
	}
});

var routes = (
	React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "portfolio", handler: Portfolio}), 
		React.createElement(Route, {name: "about", handler: About}), 
		React.createElement(DefaultRoute, {handler: Home})
	)
	);

Router.run(routes, function(Handler){
	React.render(React.createElement(Handler, null), document.body);
});