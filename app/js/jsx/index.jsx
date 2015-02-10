var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Menu = require('./ui/Menu.js');



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

React.render(<App />, document.body);