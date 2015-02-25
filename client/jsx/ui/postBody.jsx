var React = require('react');

var req = require('superagent');
var Router = require('react-router');

var PostBody = module.exports = React.createClass({
	mixins: [ Router.State ],
	getInitialState: function(){
		return {
			post: {}
		};
	},
	componentDidMount: function(){
		var that = this;
		req.get('post/'+ this.getParams().id)
			.end(function(res){
				that.setState({post: JSON.parse(res.text)});
			});
	},
	render: function(){
		return (
			<div className='postBody'>
				<h1>{this.state.post.title}</h1>
				<p>{this.state.post.body}</p>
			</div>
		);
	}
})