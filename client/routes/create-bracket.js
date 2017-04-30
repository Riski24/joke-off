angular.module('app.createBracket', [])

.controller('CreateBracket', function($scope, $location, Brackets) {
	$scope.serverResponded = false;

	$scope.createBracket = function() {
		Brackets.createBracket({
			name: $scope.name
		})
		.then(function(response) {
			$scope.serverResponded = true;
			$scope.adminUrl = $location.host() + response.data.adminUrl;
			$scope.userUrl = $location.host() + response.data.userUrl;
		});
	};
});
