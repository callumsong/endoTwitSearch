'use strict';
module.exports = function (app) {
  app.controller('searchController', ['$scope', '$http', function($scope, $http) {

    $scope.items = [];
    $scope.searchTweet = function() {
      $http.get('/search/' + $scope.searchTerm).
        success(function(data) {
          var statuses = data.statuses;
          var images = statuses.filter(function(element) {
            return !!(element.entities.media);
          });
          $scope.items = images;
        }).
        error(function(data) {
          console.log(data);
        });
    }
  }]);
};