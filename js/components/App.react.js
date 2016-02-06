var React = require('react');
var CardSet = require('./CardSet.react');

var menuItems = ['My recipes', 'Trending', 'Invite family'];

var App = React.createClass({

	getInitialState: function() {
		return {
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
				<CardSet cards={this.state.cards}/>
			</div>
		);
	}
});

module.exports = App;