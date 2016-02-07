var React = require('react');
var RecipeCardActionCreators = require('../actions/RecipeCardActionCreators');


var RecipeFromUrl = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},

	render: function() {
		return (
			<div>
				<input type="text" onChange={this._onChange} value={this.state.value}/>
				<input type="button" onClick={this._addRecipe} value="Add Recipe" />
			</div>
		);
	},

	_onChange: function(e) {
		this.setState({value: e.target.value});
	},

	_addRecipe: function() {
		var url = this.state.value;
		RecipeCardActionCreators.createRecipeFromUrl(url);
	}
});

module.exports = RecipeFromUrl;