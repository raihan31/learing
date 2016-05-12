'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentCourseCtrl', [
    '$scope',
    '$sce',
    'courseData',
    'studentData',
    function($scope, $sce, courseData, studentData) {
      $scope.course = courseData;
      $scope.trustAsHtml = $sce.trustAsHtml;
      $scope.skills = courseData.skills;
      $scope.studentProfile = studentData;
    }
  ]);
