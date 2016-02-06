var React = require('react');

var RecipeTextInput = React.createClass({
	getInitialState: function() {
		return {
			value: 'Hello!'
		};
	},

	render: function() {
		return (
			<div>
				<textarea onChange={this._onChange} value={this.state.value}></textarea>
				<h1>{this.state.value}</h1>
			</div>
		);
	},

	_onChange: function(event) {
		this.setState({value: event.target.value});
	}
});

module.exports = RecipeTextInput;