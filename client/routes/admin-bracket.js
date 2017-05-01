angular.module('app.adminBracket', [])

.controller('AdminBracket', function($scope, $routeParams, $location, Bracket, Competitor) {
	var socket = io();

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
			socket.emit('competitorListChange');
		});
	};

	socket.on('competitorListChange', function() {
		getCompetitorList();
	});

	var getCompetitorList = function() {
		Competitor.findBracketCompetitors($scope.bracket.id)
		.then(function(response) {
			$scope.competitors = response.data;
		});
	};
});
