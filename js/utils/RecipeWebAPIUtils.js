var RecipeServerActionCreators = require('../actions/RecipeServerActionCreators');

module.exports = {
	getFeedRecipes: function() {
		var recipes = [
			{
				id: 0,
				title: "Chicken", 
				text: "Hello, Can you hear me?"
			},
			{
				id: 1,
				title: "Meat", 
				text: "What does the fox say?"
			},
			{
				id: 2,
				title: "Pasta", 
				text: "Why did Uber change their logo?"
			},
			{
				id: 3,
				title: "Juice", 
				text: "Strawberry smoothie is great!"
			},
			{
				id: 4,
				title: "Brigadeiro", 
				text: "Brazilian desert! Yuuummm!"
			}
		];
		
		console.log('Got recipe feed.');
		RecipeServerActionCreators.receiveFeedRecipes(recipes);
	}
}