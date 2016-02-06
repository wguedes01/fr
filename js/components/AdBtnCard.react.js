var React = require('react');

var AdBtnCard = React.createClass({
	render: function() {

		return (
			<div className="thumbnail" onClick={this.props.handleClick}>
				<img/>
				<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				<div className="caption">
					<h3>New Recipe</h3>
				</div>
			</div>
		);
	},
});

module.exports = AdBtnCard;