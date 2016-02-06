var React = require('react');

var CardSearch = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},

	render: function() {
		return (
			<input type="text" value={this.state.value} onChange={this._onChange}/>
		);
	},

	_onChange: function(e) {
		this.setState({value: e.target.value});
		this.props.onSearchFilterChange(e.target.value);
	}
});

module.exports = CardSearch;