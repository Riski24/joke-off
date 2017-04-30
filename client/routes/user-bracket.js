angular.module('app.userBracket', [])

.controller('UserBracket', function($scope, $location, Bracket) {
	Bracket.findUserBracket($location.url().slice(1))
	.then(function(response) {
		$scope.bracket = response.data;
	});
});
