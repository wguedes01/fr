var React = require('react');
var LeftSideMenu = require('./LeftSideMenu.react');

var menuItems = ['My recipes', 'Trending', 'Invite family'];

var App = React.createClass({

	getInitialState: function() {
		return {
			menuItemSelected: 0
		};
	},

	render: function() {
		return (
			<div>
				<LeftSideMenu
					items={menuItems}
					onMenuItemClicked={this._onMenuItemClicked}
				/>
				<h1>{menuItems[this.state.menuItemSelected]}</h1>
			</div>
		);
	},

	_onMenuItemClicked: function(index) {
		this.setState({
			menuItemSelected: index
		});
	}
});

module.exports = App;