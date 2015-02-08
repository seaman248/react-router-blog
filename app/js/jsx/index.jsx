var React = require('react');

var Menu = React.createClass({
    render: function () {
        return (
        	<nav>
        		<ul>
        			<li><a>Menu</a></li>
        		</ul>
        	</nav>
        	);
    }
});

var App = React.createClass({
	render: function(){
		return (
			<div className='App'>
				<Menu />
			</div>
			);
	}
});

React.render(<App />, document.body);