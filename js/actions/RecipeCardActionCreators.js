var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

	clickRecipeCard: function(cardId) {
		AppDispatcher.dispatch({
			type: ActionTypes.CLICK_RECIPE_CARD,
			cardId: cardId
		});
	},

	createRecipeFromUrl: function(url) {
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_RECIPE_FROM_URL,
			url: url
		});
	}
};