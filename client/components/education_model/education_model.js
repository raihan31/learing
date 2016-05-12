'use strict';

angular.module('ctSignupApp')
.factory('EducationModel', [
  '$http',
  '$q',
  'ENDPOINT',
  'localStorageService',
  function ($http, $q, ENDPOINT, localStorageService) {
    var API = {
      data: {},
      all: function (centerId, courseId) {
        var deferred = $q.defer();

        if (API.data[centerId + '_' + courseId]) {
          deferred.resolve(API.data[centerId + '_' + courseId]);
        } else {
          $http.get(ENDPOINT + '/api/education_models.json?learning_center_id=' + centerId + '&course_id=' + courseId)
            .then(function (data) {
              // localStorageService.set('education_models_' + centerId + '_' + courseId, data.data);
              API.data[centerId + '_' + courseId] = data.data;
              deferred.resolve(data.data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
        }

        return deferred.promise;
      },
      get: function (centerId, courseId, id) {
        return API.data[centerId + '_' + courseId].find(function (item) {
          return item.id === id;
        });
      }
    };

    return API;
  }
]);
