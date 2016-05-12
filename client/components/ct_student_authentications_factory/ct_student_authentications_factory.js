'use strict';

angular.module('ctStudentDashboard')
  .factory('StudentAuthenticationsProvider', function($resource) {
    function getUrl(url) {
      return $resource(url, {
        id: '@id'
      }, {
        get: {
          method: 'GET'
        }
      });
    }
    return {
      getUrl: getUrl
    };
  });
