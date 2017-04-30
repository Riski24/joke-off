angular.module('app', [
  'app.createBracket',
  'app.bracket',
  'app.services',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CreateBracket',
    templateUrl: 'routes/create-bracket.html'
  })
  .otherwise({
    controller: 'Bracket',
    templateUrl: 'routes/bracket.html'
  });
})