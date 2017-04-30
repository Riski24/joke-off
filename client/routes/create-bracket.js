angular.module('app.createBracket', [])

.controller('CreateBracket', function($scope, $location, Brackets) {
	$scope.serverResponded = false;

	$scope.createBracket = function() {
		Brackets.createBracket({
			name: $scope.name
		})
		.then(function(response) {
			$scope.serverResponded = true;
			var host = $location.host() + '/#/';
			$scope.adminUrl = host + response.data.adminUrl;
			$scope.userUrl = host + response.data.userUrl;
		});
	};
});
