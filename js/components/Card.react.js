var React = require('react');
var RecipeCardActionCreators = require('../actions/RecipeCardActionCreators');

var Card = React.createClass({
	render: function() {
		var card = this.props.card;

		var imgStyle = {
			objectFit: "cover",
			width: '200px',
			height: '150px'
		};

		var tags = []
		for(tag in card.tags) {
			tags.push(<span className="label label-info" style={{margin: '3px'}}>{card.tags[tag]}</span>);
		}

		return (
			<div className="thumbnail" onClick={this._onClick}>
				<img style={imgStyle} src={card.url} alt="..."/>
				<div className="caption">
					<h3>{card.title}</h3>
					<p>{card.text}</p>
					<p>{tags}</p>
				</div>
			</div>
		);
	},

	_onClick: function() {
		RecipeCardActionCreators.clickRecipeCard(this.props.card.id);
	}
});

module.exports = Card;