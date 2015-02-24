var React = require('react');
var req = require('superagent');

var PostBody = module.exports = React.createClass({
	render: function(){
		return (
			<div className='postBody'>
				<h1>{this.props.title}</h1>
				<p>{this.props.body}</p>
			</div>
		);
	}
})