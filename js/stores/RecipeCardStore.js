var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _recipeCards = {};

var RecipeCardStore = assign({}, EventEmitter.prototype, {
	init: function(recipes) {
		recipes.forEach(function(recipe) {
			_recipeCards[recipe.id] = {
				id: recipe.id,
				title: recipe.title,
				text: recipe.text
			}
		}, this);
	}, 

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	get: function(id) {
		return _recipeCards[id];
	},

	getAll: function() {
		var cards = []
		for(key in _recipeCards) {
			cards.push(_recipeCards[key]);
		}
		console.log('getAll() - ' + cards.length);
		return cards;
	}

});

RecipeCardStore.dispatchToken = AppDispatcher.register(function(action) {

	switch(action.type) {
		case ActionTypes.RECEIVE_RECIPES:
			RecipeCardStore.init(action.recipes);
			RecipeCardStore.emitChange();
			console.log('Received recipes.');
			break;
		case ActionTypes.RECIPE_CARD_CLICKED:
			break;
		default:
			// do nothing
	}

});

module.exports = RecipeCardStore;