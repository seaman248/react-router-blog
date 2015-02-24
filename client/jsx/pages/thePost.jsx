var React = require('react');
var req = require('superagent');
var Router = require('react-router');

var PostHeader = require('../ui/postHeader.jsx');
var PostBody = require('../ui/postBody.jsx');

var ThePost = module.exports = React.createClass({
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
				that.setState(JSON.parse(res.text));
			});
	},
	render: function(){
		console.log(this.state.post);
		return (
			<div className='thePostPage'>
				<div className='container'>
					<PostHeader />
					<PostBody 
						title={this.state.post.title} 
						body={this.state.post.body} />
				</div>
			</div>
			);
	}
});