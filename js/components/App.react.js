var React = require('react');
var CardSet = require('./CardSet.react');
var RecipeViewer = require('./RecipeViewer.react');
var LeftSideMenu = require('./LeftSideMenu.react');
var assign = require('object-assign');
var RecipeCardStore = require('../stores/RecipeCardStore');

var menuItems = [
	{ id: 0, text: "Trending"},
	{ id: 1, text: "My Recipies"},
	{ id: 2, text: "Friends & Family"},
];



var App = React.createClass({

	getInitialState: function() {
		return {
			// TODO: Add tags to recipes
			currentTab: 0,
			recipeCards: RecipeCardStore.getAll()
		};
	},

	componentDidMount: function() {
		RecipeCardStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		RecipeCardStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
				<div className="container-fluid">		
					<div className="row">
						<div className="col-md-1 sidebar">
							<LeftSideMenu 
								items={menuItems}
								menuItemClicked={this.menuItemClicked}/>
						</div>
						<div className="col-md-15 main">
							{
								this.state.currentTab === 5 ?
									<RecipeViewer 
										onBackBtnClick={this.handleBackBtnClick}
									/> :
									null
							}
							{
								this.state.currentTab === 0 ?
									<CardSet 
										cards={this.state.recipeCards}
										handleStartNewRecipeNav={this.handleStartNewRecipeNav}
									/> :
									null
							}
						</div>
					</div>
				</div>
		);
	},

	menuItemClicked: function(index) {
		console.log(index + ' was clicked.');
		this.setState(assign({}, this.state, {currentTab: index}));
	},

	handleStartNewRecipeNav: function() {
		this.setState(assign({}, this.state, {currentTab: 3}));
	},

	handleBackBtnClick: function() {
		this.setState(assign({}, this.state, {currentTab: 0}));
	},

	_onChange: function() {
		console.log('listened....');
		this.setState(assign({}, this.state, {currentTab: 5}));
	}
});

module.exports = App;