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
			cards: [
				{text: "Hello", title: "Adele", id: 0},
				{text: "Can you hear me?", title: "Bacon", id: 1},
				{text: "Hello", title: "Adele", id: 2},
				{text: "Can you hear me?", title: "Bacon", id: 3},
				{text: "Hello", title: "Adele", id: 4},
				{text: "Can you hear me?", title: "Bacon", id: 5},
				{text: "Jess's favorite!", title: "French Fries", id: 6}
			],
			currentTab: 0
		};
	},

	componentDidMount: function() {
		RecipeCardStore.addChangeListener(this._onChange);
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
										cards={this.state.cards}
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