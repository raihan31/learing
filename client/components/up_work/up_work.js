'use strict';

angular.module('ctSignupApp')
  .factory('UpWork', [
    '$http',
    '$q',
    'ENDPOINT',
    'localStorageService',
    function ($http, $q, ENDPOINT, localStorageService) {
      var API = {
        all: function () {
          var deferred = $q.defer();
          $http.get(ENDPOINT + '/api/up_works.json')
            .then(function (data) {
              //API.data[id] = data.data;
              deferred.resolve(data.data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
          return deferred.promise;
        }
      };

      return API;
    }
  ]);
