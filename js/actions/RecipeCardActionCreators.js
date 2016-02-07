var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
	clickRecipeCard: function(cardId) {
		AppDispatcher.dispatch({
			type: 'CLICK_RECIPE_CARD',
			cardId: cardId
		});
	}	
};