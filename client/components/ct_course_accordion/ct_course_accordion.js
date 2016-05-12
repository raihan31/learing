'use strict';

angular.module('ctStudentDashboard')
.directive('ctCourseAccordion', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_course_accordion/ct_course_accordion.html',
      scope: {
        skills: '=skillsData'
      },
      link: function ($scope, element) {
        $scope.toggleChildren = function (event) {
          event.stopPropagation();
          event.preventDefault();
          
          $($(event.target, element).parents('li').get(0)).toggleClass('active');
        };
      }
    };
  }
]);