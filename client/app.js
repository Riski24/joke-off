angular.module('app', [
  'app.services',
  'app.questions',
  'app.addQuestion',
  'app.random',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/questions', {
      controller: 'QuestionsController',
      templateUrl: 'routes/questions.html'
    })
    .when('/add-question', {
      controller: 'AddQuestionController',
      templateUrl: 'routes/add-question.html'
    })
    .when('/random', {
      controller: 'RandomController',
      templateUrl: 'routes/random.html'
    })
    .otherwise({
      redirectTo: '/questions'
    });
})