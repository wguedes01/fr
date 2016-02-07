var React = require('react');
var RecipeCardActionCreators = require('../actions/RecipeCardActionCreators');

var Card = React.createClass({
	render: function() {
		var imgStyle= {

		};

		return (
			<div className="thumbnail" onClick={this._onClick}>
				<img style={imgStyle} src="http://freecoconutrecipes.com/wp-content/uploads/sites/10/2014/12/Roast_Chicken_with_Coconut_Oil_recipe_photo.jpg" alt="..."/>
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