angular.module('app.questions', [])

.controller('QuestionsController', function($scope, Questions) {

  var getQuestions = function() {
    Questions.getAll()
    .then(function(data) {
      $scope.questions = data;
    });
  };

  getQuestions();

  $scope.clickChoice = function(id, choice) {
    Questions.vote({id, choice})
    .then(getQuestions);
  };
});
