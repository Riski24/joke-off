angular.module('app.userBracket', [])

.controller('UserBracket', function($scope, $location, Brackets) {
	Brackets.findUserBracket($location.url().slice(1))
	.then(function(response) {
		$scope.bracket = response.data;
	});
});
