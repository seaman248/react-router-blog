var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Menu = require('./ui/Menu.js');

var Home = require('./pages/home.js');
var Portfolio = require('./pages/portfolio.js');

var About = React.createClass({
	render: function(){
		return (<p>About</p>);
	}
});

var App = React.createClass({
	mixins: [ Router.State ],
	render: function(){
		var pageName = this.getRoutes().reverse()[0].name;
		return (
			<div className='App'>
				<Menu />
				<TransitionGroup component='div' transitionName='page'>
					<RouteHandler key={pageName} />
				</TransitionGroup>
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