angular.module('myApp')
	.factory('Pokedex', function($resource) {
	  return $resource('http://pokeapi.co/api/v1/pokedex/1/');
	  // Get /books
	  // get /books/:id
	  // post /books
	});