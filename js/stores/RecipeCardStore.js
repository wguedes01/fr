var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';
var CLICK_EVENT = 'click';

var _recipeCards = {};
var _currentRecipeCardId = null;

var RecipeCardStore = assign({}, EventEmitter.prototype, {
	init: function(recipes) {
		recipes.forEach(function(recipe) {
			_recipeCards[recipe.id] = {
				id: recipe.id,
				title: recipe.title,
				text: recipe.text,
				url: recipe.url ? recipe.url : "http://www.aviatorcameragear.com/wp-content/uploads/2012/07/placeholder.jpg",
				tags: recipe.tags
			}
		}, this);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	emitClick: function() {
		this.emit(CLICK_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	addClickListener: function(callback) {
		this.on(CLICK_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	removeClickListener: function(callback) {
		this.removeListener(CLICK_EVENT, callback);
	},

	getCurrent: function() {
		return _currentRecipeCardId;
	},

	get: function(id) {
		return _recipeCards[id]
	},

	getAll: function() {
		var cards = []
		for(key in _recipeCards) {
			cards.push(_recipeCards[key]);
		}
		console.log('getAll() - ' + cards.length);
		return cards;
	},

	createRecipeFromUrl: function(url) {
		console.log('Adding from url: ' + url);
		_recipeCards['123'] = {
				id: 123,
				title: "1234",
				text: url,
				url: url
		};
	}

});

RecipeCardStore.dispatchToken = AppDispatcher.register(function(action) {

	switch(action.type) {
		case ActionTypes.RECEIVE_RECIPES:
			RecipeCardStore.init(action.recipes);
			RecipeCardStore.emitChange();
			break;
		case ActionTypes.CLICK_RECIPE_CARD:
			_currentRecipeCardId = action.cardId;
			RecipeCardStore.emitClick();
			break;
		case ActionTypes.CREATE_RECIPE_FROM_URL:
			RecipeCardStore.createRecipeFromUrl(action.url);
			RecipeCardStore.emitChange();
			break;
		default:
			// do nothing
	}

});

module.exports = RecipeCardStore;