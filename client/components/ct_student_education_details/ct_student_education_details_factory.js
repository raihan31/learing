'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentEduDetailsfactory', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/students/:id/educations.json', {
      id: '@id'
    }, {
      get: {
        method: 'GET',
        isArray: 'true'
      },
      post: {
        method: 'POST'
      }
    });
  })
  .factory('StudentEduDetailsDelete', ['$resource', 'ENDPOINT', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/students/:id/educations/:edu_id', {
      id: '@id',
      edu_id: '@edu_id'
    }, {
      get: {
        method: 'GET'
      },
      drop: {
        method: 'DELETE'
      }
    });
  }]);
