var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {

	receiveFeedRecipes: function(recipes) {
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_RECIPES,
			recipes: recipes
		});
		console.log('Dispatched action.');
	}
};