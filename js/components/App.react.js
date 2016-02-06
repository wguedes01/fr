var React = require('react');
var CardSet = require('./CardSet.react');

var menuItems = ['My recipes', 'Trending', 'Invite family'];

var App = React.createClass({

	getInitialState: function() {
		return {
			// TODO: Add tags to recipes
			cards: [
				{text: "Hello", title: "Adele"},
				{text: "Can you hear me?", title: "Bacon"},
				{text: "Hello", title: "Adele"},
				{text: "Can you hear me?", title: "Bacon"},
				{text: "Hello", title: "Adele"},
				{text: "Can you hear me?", title: "Bacon"},
				{text: "Jess's favorite!", title: "French Fries"}
			]
		};
	},

	render: function() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div class="col-md-2 sidebar">
							<ul>
								<li>Hello</li>
								<li>Hello</li>
								<li>Hello</li>
							</ul>
						</div>
						<div className="col-md-10 main">
							<CardSet cards={this.state.cards}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = App;