'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentOnlineTestsRequired', [
    '$resource',
    'ENDPOINT',
    function($resource, ENDPOINT) {
      return $resource(ENDPOINT + '/api/students/required_tests.json', {}, {
        get: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ])
  .factory('StudentOnlineTest', [
    '$resource',
    'ENDPOINT',
    function($resource, ENDPOINT) {
      return $resource(ENDPOINT + '/api/online_tests/:id', {
        id: '@id'
      }, {
        getQuestions: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
