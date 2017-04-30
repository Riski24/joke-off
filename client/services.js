angular.module('app.services', [])

.factory('Brackets', function($http) {
  var createBracket = function(data) {
    return $http({
      method: 'POST',
      url: '/api/Bracket',
      data: data
    });
  };

  var findAdminBracket = function(url) {
    return $http({
      method: 'GET',
      url: '/api/adminBracket?url=' + url
    });
  };

  var findUserBracket = function(url) {
    return $http({
      method: 'GET',
      url: '/api/userBracket?url=' + url
    });
  };

  return {
    createBracket: createBracket,
    findAdminBracket: findAdminBracket,
    findUserBracket: findUserBracket
  };
})

.factory('Competitors', function($http) {
  var createCompetitor = function(data) {
    return $http({
      method: 'POST',
      url: '/api/Competitor',
      data: data
    });
  };

  var findBracketCompetitors = function(bracketId) {
    return $http({
      method: 'GET',
      url: '/api/Competitors?bracketId=' + bracketId
    });
  };

  return {
    createCompetitor: createCompetitor,
    findBracketCompetitors: findBracketCompetitors
  }
})
