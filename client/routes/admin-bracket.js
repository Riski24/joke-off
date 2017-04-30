angular.module('app.adminBracket', [])

.controller('AdminBracket', function($scope, $routeParams, $location, Bracket, Competitor) {
	Bracket.findAdminBracket($routeParams.url)
	.then(function(response) {
		$scope.bracket = response.data;

		getCompetitorList();
	});

	$scope.addCompetitor = function() {
		Competitor.createCompetitor({
			bracketId: $scope.bracket.id,
			name: $scope.competitorName
		})
		.then(function(response) {
			getCompetitorList();
		});
	};

	var getCompetitorList = function() {
		Competitor.findBracketCompetitors($scope.bracket.id)
		.then(function(response) {
			$scope.competitors = response.data;
		});
	};
});
