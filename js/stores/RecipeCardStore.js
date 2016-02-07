var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var RecipeCardStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	get: function(id) {
		return {title: "helloaaa", text: "hi..", id: 1};
	}
});

RecipeCardStore.dispatchToken = AppDispatcher.register(function(action) {

	switch(action.type) {
		case 'CLICK_RECIPE_CARD':
			RecipeCardStore.emitChange();
			console.log('inside store...');
			break;
		default:
			// do nothing
	}

});

module.exports = RecipeCardStore;