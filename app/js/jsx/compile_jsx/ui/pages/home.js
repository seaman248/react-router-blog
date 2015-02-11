var React = require('react');

var Home = React.createClass({displayName: "Home",
	render: function(){
		return (React.createElement("p", null, "Welcome to home page"));
	}
});

module.exports = Home;