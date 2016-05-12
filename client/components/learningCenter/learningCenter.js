'use strict';

angular.module('ctSignupApp')
.factory('LearningCenter', [
  '$http',
  '$q',
  'ENDPOINT',
  'localStorageService',
  function ($http, $q, ENDPOINT, localStorageService) {
    var API = {
      data: [
      ],
      all: function (id) {
        var deferred = $q.defer();
        if (API.data.length) {
          deferred.resolve(API.data);
        } else {
          $http.get(ENDPOINT + '/api/learning_centers.json?student_id='+id)
            .then(function (data) {
              // localStorageService.set('learning_centers', data.data);
              API.data = data.data;
              deferred.resolve(data.data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
        }

        return deferred.promise;
      },
      get: function (id) {
        return API.data.find(function (item) {
          return item.id === id;
        });
      }
    };

    return API;
  }
]);
