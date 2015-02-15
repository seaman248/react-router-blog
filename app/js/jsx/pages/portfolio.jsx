var React = require('react');

var PortfolioItems = React.createClass({
	render: function(){
		var PItems = [];
		if(this.props.items){
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
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
	{title: 'Work1', description: 'Lorem ipsum dolor sit.', date: 'Два дня назад'},
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