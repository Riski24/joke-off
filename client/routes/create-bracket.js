angular.module('app.createBracket', [])

.controller('CreateBracket', function($scope, Brackets) {
	$scope.serverResponded = false;

	$scope.createBracket = function() {
		Brackets.createBracket({
			name: $scope.name
		})
		.then(function(response) {
			$scope.serverResponded = true;
			$scope.adminUrl = response.data.adminUrl;
			$scope.userUrl = response.data.userUrl;
		});
	};
});
