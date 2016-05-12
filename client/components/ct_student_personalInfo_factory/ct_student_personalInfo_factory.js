'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentPersonalInfo', ['$resource', 'ENDPOINT', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/students/:id', {
      id: '@id'
    }, {
      get: {
        method: 'GET'
      },
      save: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });
  }])
