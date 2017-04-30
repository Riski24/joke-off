angular.module('app.bracket', [])

.controller('Bracket', function($scope, $location, Brackets) {
	Brackets.findBracket($location.url())
	.then(function(response) {
		$scope.bracket = response.data;
	});
});
