var React = require('react');
var RecipeCardStore = require('../stores/RecipeCardStore');

var RecipeViewer = React.createClass({
	getInitialState: function() {
		return {
			visible: true,
			card: RecipeCardStore.get(RecipeCardStore.getCurrent())
		};
	},

	render: function() {
		return (
			<div className="container">
				<p onClick={this._handleBackBtnClick}>Back</p>
				<h1>{this.state.card.title}</h1>
				<p>{this.state.card.text}</p>
			</div>
		);
	},

	_handleBackBtnClick: function() {
		this.props.onBackBtnClick();
	}
});

module.exports = RecipeViewer;