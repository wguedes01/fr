var RecipeServerActionCreators = require('../actions/RecipeServerActionCreators');

module.exports = {
	getFeedRecipes: function() {
		var recipes = [
			{
				id: 0,
				title: "Chicken",
				text: "Hello, Can you hear me?",
				url: "http://freecoconutrecipes.com/wp-content/uploads/sites/10/2014/12/Roast_Chicken_with_Coconut_Oil_recipe_photo.jpg",
				tags: ['chicken']
			},
			{
				id: 1,
				title: "Meat",
				text: "What does the fox say?",
				url: "http://www.peppercornsteak.ca/wp-content/uploads/2015/04/steak_sm.jpg",
				tags: ['meat']
			},
			{
				id: 2,
				title: "Pasta",
				text: "Why did Uber change their logo?",
				url: "http://images.media-allrecipes.com/userphotos/250x250/244889.jpg",
				tags: ['italy', 'pasta']
			},
			{
				id: 3,
				title: "Juice",
				text: "Strawberry smoothie is great!",
				tags: ['healthy', 'fruit']
			},
			{
				id: 4,
				title: "Brigadeiro",
				text: "Brazilian desert! Yuuummm!",
				url: "http://streetsmartbrazil.com/wp-content/uploads/drupal-files/userfiles/brigadeiromordido.jpg"
			}
		];

		console.log('Got recipe feed.');
		RecipeServerActionCreators.receiveFeedRecipes(recipes);
	}
}