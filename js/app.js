var React = require('react');
var App = require('./components/App.react')
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');

RecipeWebAPIUtils.getFeedRecipes();

React.render(
	<App/>,
	document.getElementById('app')
);