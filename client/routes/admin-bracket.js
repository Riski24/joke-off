angular.module('app.adminBracket', [])

.controller('AdminBracket', function($scope, $routeParams, $location, Brackets, Competitors) {
	Brackets.findAdminBracket($routeParams.url)
	.then(function(response) {
		$scope.bracket = response.data;

		getCompetitorList();
	});

	$scope.addCompetitor = function() {
		Competitors.createCompetitor({
			bracketId: $scope.bracket.id,
			name: $scope.competitorName
		})
		.then(function(response) {
			getCompetitorList();
		});
	};

	var getCompetitorList = function() {
		Competitors.findBracketCompetitors($scope.bracket.id)
		.then(function(response) {
			$scope.competitors = response.data;
		});
	};
});
