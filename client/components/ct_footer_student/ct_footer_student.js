'use strict';

angular.module('ctSignupApp')
.directive(
  'ctFooterStudent',
  [
    function () {
      return {
        restrict: 'E',
        templateUrl: 'components/ct_footer_student/ct_footer_student.html',
        scope: {
          websiteMenuItems: '=websiteMenuItemsData',
          studentMenuItems: '=studentMenuItemsData',
          socialNetworkNavs: '=socialNetworkNavsData'
        }
      };
    }
  ]
);
