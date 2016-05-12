'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentMeCtrl', [
    '$scope',
    '$rootScope',
    'headData',
    'studentData',
    function($scope, $rootScope, headData, studentData) {
      $scope.studentData = studentData;
    }
  ]);
