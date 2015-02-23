var React = require('react');
var req = require('superagent');

var PostHeader = require('../ui/postHeader.jsx');
var PostBody = require('../ui/postBody.jsx');

var ThePost = module.exports = React.createClass({
	getInitialState: function(){
		return {
			postId: ''
		};
	},
	render: function(){
		
		return (
			<div className='thePostPage'>
				<div className='container'>
					<PostHeader />
					<PostBody />
				</div>
			</div>
			);
	}
});