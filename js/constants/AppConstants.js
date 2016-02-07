var keyMirror = require('keymirror');

module.exports = {
	
	ActionTypes: keyMirror({
		RECEIVE_RECIPES: null,
		CLICK_RECIPE_CARD: null,
		CREATE_RECIPE_FROM_URL: null
	})

};