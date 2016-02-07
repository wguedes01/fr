var React = require('react');

var LeftSideMenu = React.createClass({

/**
 * @return {object}
 */
 render: function() {
 	var items = [];
 	for(key in this.props.items) {
 		var menuItem = this.props.items[key];
 		items.push(<li key={menuItem.id} onClick={this.handleClick.bind(this, menuItem.id)}>{menuItem.text}</li>)
 	}
 	return (
 		<ul>
 			{items}
 		</ul>
 	);
 },

 handleClick: function(index) {
 	this.props.menuItemClicked(index);
 }

});

module.exports = LeftSideMenu;