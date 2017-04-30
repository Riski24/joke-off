angular.module('app.adminBracket', [])

.controller('AdminBracket', function($scope, $routeParams, $location, Brackets) {
	Brackets.findAdminBracket($routeParams.url)
	.then(function(response) {
		$scope.bracket = response.data;
	});
});
