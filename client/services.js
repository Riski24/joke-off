angular.module('app.services', [])

.factory('Brackets', function($http) {
  var createBracket = function(data) {
    return $http({
      method: 'POST',
      url: '/api/Bracket',
      data: data
    });
  };

  var findBracket = function(url) {
    return $http({
      method: 'GET',
      url: '/api/Bracket?url=' + url
    });
  };

  return {
    createBracket: createBracket,
    findBracket: findBracket
  };
})
