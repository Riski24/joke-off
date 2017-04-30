angular.module('app.adminBracket', [])

.controller('AdminBracket', function($scope, $location, Brackets) {
	console.log($scope.url)
	Brackets.findAdminBracket($location.url().slice(1))
	.then(function(response) {
		$scope.bracket = response.data;
	});
});
