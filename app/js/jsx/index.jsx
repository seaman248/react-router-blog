var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var Menu = require('./ui/Menu.js');

var Home = React.createClass({
	render: function(){
		return (<p>Home</p>);
	}
});

var Portfolio = React.createClass({
	render: function(){
		return (<p>Portfolio</p>);
	}
});

var About = React.createClass({
	render: function(){
		return (<p>About</p>);
	}
});

var App = React.createClass({
	render: function(){
		return (
			<div className='App'>
				<Menu />
				<RouteHandler />
			</div>
			);
	}
});

var routes = (
	<Route name='app' path='/' handler={App}>
		<Route name='portfolio' handler={Portfolio} />
		<Route name='about' handler={About} />
		<DefaultRoute handler={Home} />
	</Route>
	);

Router.run(routes, function(Handler){
	React.render(<Handler />, document.body);
});