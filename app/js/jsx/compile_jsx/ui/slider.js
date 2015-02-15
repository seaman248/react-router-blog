var React = require('react');

module.exports = React.createClass({displayName: "exports",
	render: function(){
		return (
			React.createElement("div", {className: "Jumbotron"}, 
				React.createElement("div", {className: "container"}, 
					React.createElement("h1", null, "Jumbotron header"), 
					React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laboriosam debitis eius sed laudantium, alias excepturi perferendis dolorem ducimus quia."), 
					React.createElement("button", null, "Some link")
				)
			)
			);
	}
});