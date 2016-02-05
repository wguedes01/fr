var React = require('react');
var RecipeTextInput = require('./RecipeTextInput.react');

var SimpleEditor = React.createClass({
	render: function() {
		return (
			<div>
				<h1>My Editor</h1>
				<RecipeTextInput/>
			</div>
		);
	}
});

module.exports = SimpleEditor;