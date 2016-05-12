'use strict';

angular.module('ctSignupApp')
  .directive('ctStudentHero', [
    function() {
      return {
        restrict: 'E',
        scope: {
          student: '=studentData',
          menuItems: '=menuItemsData'
        },
        templateUrl: 'components/ct_student_hero/ct_student_hero.html'
      };
    }
  ]);
