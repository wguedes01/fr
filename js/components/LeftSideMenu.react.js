var React = require('react');

var LeftSideMenu = React.createClass({

	getInitialState: function() {
		return {
			focused: 0
		};
	},

/**
 * @return {object}
 */
 render: function() {
 	var self = this;
 	return (
 		<section>
 			<ul>
 				{this.props.items.map(function(m, index) {

 					var style = '';
 					if(self.state.focused === index) {
 						style = 'focused';
 					}

 					return (
 						<li
 							key={index}
 							className={style}
 							onClick={self._onClick.bind(self, index)}
 						>
 							{m}
 						</li>
 					);
 				})}
 			</ul>
 		</section>
 	);
 },

 _onClick: function(index) {
 		this.setState({focused: index});
 		this.props.onMenuItemClicked(index);
 }

});

module.exports = LeftSideMenu;