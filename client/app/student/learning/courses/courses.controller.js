'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentCoursesCtrl', [
    '$scope',
    'coursesData',
    function($scope, coursesData) {
      $scope.courses = coursesData;
      console.log('data Courses', coursesData);

    }
  ]);
