angular.module('app.random', [])

.controller('RandomController', function($scope, Questions) {
  Questions.getOne()
  .then(function(data) {
    $scope.question = data.data;
  });
});