var React = require('react');
var reactRouter = require('react-router');
var menuItems = [
		{name: 'home', href: '/home'},
		{name: 'blog', href: '/blog'},
		{name: 'about', href: '/about'}
	];

var Items = React.createClass({
	render: function(){
		var xItems = [];
		this.props.items.forEach(function(menuItem){
			xItems.push(
				<li key={menuItem.name}>
					<a href={menuItem.href}>{menuItem.name}</a>
				</li>
			);
		})
		return (
			<ul>
				{xItems}
			</ul>
			);
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