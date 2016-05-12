'use strict';

angular.module('ctStudentDashboard')
  .directive('ctStudentProfile', [
    function() {
      return {
        restrict: 'E',
        scope: {
          student: '=studentData',
        },
        templateUrl: 'components/ct_student_profile/ct_student_profile.html',
        //link: function($scope) {
        //
        //}
      };
    }
  ]);
