'use strict';

angular.module('ctSignupApp')
.directive('ctNavbarStudent', [
  '$window',
  function ($window) {
    return {
      restrict: 'E',
      scope: {
        menuItems: '=menuItemsData'
      },
      templateUrl: 'components/ct_navbar_student/ct_navbar_student.html',
      link: function ($scope, element) {
        $($window).on('scroll', function () {
          if ($($window).scrollTop()) {
            $('nav.navbar', element).addClass('navbar-blue');
          } else {
            $('nav.navbar', element).removeClass('navbar-blue');
          }
        });
      }
    };
  }
]);
