'use strict';
angular.module('ctSignupApp')
.directive('ctNavbarAdmin', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'components/ct_navbar_admin/ct_navbar_admin.html',
      scope: {
        menuItems: '=menuItemsData',
        socialNetworkNavs: '=socialData'
      },
      link: function () {

      }
    };
  }
]);
