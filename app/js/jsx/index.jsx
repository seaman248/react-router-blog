var React = require('react');

var menuItems = [
		{name: 'home', href: '/home'},
		{name: 'blog', href: '/blog'},
		{name: 'about', href: '/about'}
	];

var Items = React.createClass({
	render: function(){
		return (<ul><li><a>Menu item</a></li></ul>);
	}
});

var Menu = React.createClass({
	render: function () {
		return (
			<nav>
				<Items items={this.props.items} />
			</nav>
			);
	}
});

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