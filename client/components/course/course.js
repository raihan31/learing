'use strict';

angular.module('ctSignupApp')
.factory('Course', [
  '$http',
  '$q',
  'ENDPOINT',
  'localStorageService',
  function ($http, $q, ENDPOINT, localStorageService) {
    var API = {
      data: {},
      all: function (id) {
        var deferred = $q.defer();

        if (API.data[id]) {
          deferred.resolve(API.data[id]);
        } else {
          $http.get(ENDPOINT + '/api/courses.json?learning_center_id=' + id)
            .then(function (data) {
              // localStorageService.set('courses_' + id, data.data);
              API.data[id] = data.data;
              deferred.resolve(data.data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
        }

        return deferred.promise;
      },
      get: function (centerId, id) {
        return API.data[centerId].find(function (item) {
          return item.id === id;
        });
      }
    };

    return API;
  }
]);
