'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentSubscriptions', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/students/subscriptions/:id', {
      id: '@id'
    }, {
      getAllSubscriptions: {
        method: 'GET',
        isArray: true
      },
      getSubscriptionById: {
        method: 'GET',
        isArray: false
      }
    });
  });
