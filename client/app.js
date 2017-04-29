angular.module('app', [
  'app.userBracket',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/user-bracket', {
      controller: 'UserBracket',
      templateUrl: 'routes/user-bracket.html'
    })
    .otherwise({
      redirectTo: '/create-bracket'
    });
})