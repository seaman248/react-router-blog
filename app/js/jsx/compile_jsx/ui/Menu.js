var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Items = React.createClass({displayName: "Items",
	render: function(){
		return (
			React.createElement("ul", null, 
				React.createElement("li", null, React.createElement(Link, {to: "/"}, "home")), 
				React.createElement("li", null, React.createElement(Link, {to: "portfolio"}, "portfolio")), 
				React.createElement("li", null, React.createElement(Link, {to: "about"}, "about"))
			)
			);
	}
});

var Menu = React.createClass({displayName: "Menu",
	render: function () {
		return (
			React.createElement("nav", null, 
				React.createElement(Items, {items: this.props.items})
			)
			);
	}
});

module.exports = Menu;