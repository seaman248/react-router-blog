var React = require('react');

var menuItems = [
		{name: 'home', href: '/home'},
		{name: 'blog', href: '/blog'},
		{name: 'about', href: '/about'}
	]

var Items = React.creacteClass({
	render: function(){
		return (<li><a>Menu item</a></li>);
	}
})

var Menu = React.createClass({
    render: function () {
        return (
        	<nav>
        		<ul>
        			<Items items={this.props.items} />
        		</ul>
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