var React = require('react');

var PortfolioItems = React.createClass({
	render: function(){
		var PItems = [];
		if(this.props.posts){
			this.props.items.forEach(function(portfolioItem){
				PItems.push(
					<div className='portfolioItem'>
						<h3> {portfolioItem.title} </h3>
						<p> {portfolioItem.description} </p>
						<span> {portfolioItem.date} </span>
					</div>
					)
			});
		}
		return (
			<div className='portfolioItems'>
				{PItems}
			</div>
			)
	}
})

var testItems = [
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: '12.03.2014'}
];

var Portfolio = module.exports = React.createClass({
	render: function(){
		return (
			<div className='portfolioPage'>
				<PortfolioItems items={testItems} />
			</div>
			);
	}
});