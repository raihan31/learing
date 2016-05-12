'use strict';

angular.module('ctStudentDashboard')
  .directive('ctCourseListItem', [
    '$window',
    '$sce',
    function($window, $sce) {
      return {
        restrict: 'E',
        scope: {
          course: '=courseData'
        },
        templateUrl: 'components/ct_course_list_item/ct_course_list_item.html',
        link: function($scope) {
          $scope.trustAsHtml = $sce.trustAsHtml;
        }
      };
    }
  ])
  .factory('StudentCourses', ['$resource', 'ENDPOINT', function($resource, ENDPOINT) {
    return $resource(ENDPOINT + '/api/courses/:id' + '.json' + '?learning_center_id=1', {
      id: '@id'
    }, {
      getAllCourses: {
        method: 'GET',
        isArray: true
      },
      getCourseById: {
        method: 'GET',
        isArray: false
      }
    });
  }]);
