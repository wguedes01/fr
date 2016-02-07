var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
	clickRecipeCard: function(cardId) {
		AppDispatcher.dispatch({
			type: ActionTypes.CLICK_RECIPE_CARD,
			cardId: cardId
		});
	}	
};