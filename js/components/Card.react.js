var React = require('react');
var RecipeCardActionCreators = require('../actions/RecipeCardActionCreators');

var Card = React.createClass({
	render: function() {
		var imgStyle = {
			objectFit: "cover",
			width: '200px',
			height: '150px'
		};

		return (
			<div className="thumbnail" onClick={this._onClick}>
				<img style={imgStyle} src={this.props.url} alt="..."/>
				<div className="caption">
					<h3>{this.props.title}</h3>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	},

	_onClick: function() {
		RecipeCardActionCreators.clickRecipeCard(this.props.id);
	}
});

module.exports = Card;