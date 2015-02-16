var React = require('react');

var PostHeader = require('../ui/postHeader.jsx');

var ThePost = module.exports = React.createClass({
	render: function(){
		return (
			<div className='thePostPage'>
				<div className='container'>
					<PostHeader />
					<div className='thepost'>
					</div>
				</div>
			</div>
			);
	}
});