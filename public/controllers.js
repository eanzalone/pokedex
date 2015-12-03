/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //POSTS
  .controller('PostsIndexCtrl', ['$scope', '$location', 'Pokedex', 
    function ($scope, $location, Pokedex) {

    Pokedex.get(function(data) {
        console.log(data.pokemon);
        $scope.dex = data.pokemon;
      });

    // NEW POST
    // create an empty 'post' object within the scope


    // CREATE A POST    
    $scope.createPost = function() {
      // make a POST request to create the post with $http
      // sned the scope's post object as data

      // reset scope's post object
      
    };


    // DELETE A POST
    $scope.deletePost = function(post) {
      // make a DELETE request for this post

    };


  }]);
