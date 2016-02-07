var React = require('react');
var RecipeCardStore = require('../stores/RecipeCardStore');

var RecipeViewer = React.createClass({
	getInitialState: function() {
		return {
			visible: true,
			cardId: RecipeCardStore.get(1)
		};
	},

	render: function() {
		return (
			<div className="container">
				<p onClick={this._handleBackBtnClick}>Back</p>
				<h1>{this.state.cardId}</h1>
			</div>
		);
	},

	_handleBackBtnClick: function() {
		this.props.onBackBtnClick();
	}
});

module.exports = RecipeViewer;