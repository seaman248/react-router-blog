var React = require('react');
var reactRouter = require('react-router');
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
			</div>
			);
	}
});

React.render(<App />, document.body);