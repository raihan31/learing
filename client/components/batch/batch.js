'use strict';

angular.module('ctSignupApp')
.factory('Batch', [
  '$http',
  '$q',
  'ENDPOINT',
  'localStorageService',
  function ($http, $q, ENDPOINT, localStorageService) {
    var API = {
      data: {},
      all: function (id) {
        var deferred = $q.defer();
        
        localStorageService.remove('batchs_' + id);

        if (localStorageService.get('batchs_' + id)) {
          deferred.resolve(localStorageService.get('batchs_' + id));
        } else {
          $http.get(ENDPOINT + '/api/batches.json?learning_center_id=' + id)
            .then(function (data) {
              localStorageService.set('batchs_' + id, data.data);
              deferred.resolve(data.data);
            })
            .catch(function (error) {
              deferred.reject(error);
            });
        }

        return deferred.promise;
      },
      get: function (centerId, id) {
        return localStorageService.get('batchs_' + centerId).find(function (item) {
          return item.id === id;
        });
      }
    };

    return API;
  }
]);
