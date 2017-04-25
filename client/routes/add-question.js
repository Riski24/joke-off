angular.module('app.addQuestion', [])

.controller('AddQuestionController', function($scope, Questions) {
  $scope.sendChoices = function() {
    Questions.postOne({
      choice1: $scope.choice1,
      choice2: $scope.choice2
    })
    .then(function() {
      $scope.choice1 = '';
      $scope.choice2 = '';
    });
  };
});