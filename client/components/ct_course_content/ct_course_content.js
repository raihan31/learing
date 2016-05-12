'use strict';

angular.module('ctStudentDashboard')
.directive('ctCourseContent', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_course_content/ct_course_content.html',
      link: function ($scope, element) {
        // $(element).
      }
    };
  }
]);