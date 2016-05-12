'use strict';

angular.module('ctSignupApp')
.directive('ctFooter', [
  function () {
    return {
      restrict: 'EA',
      templateUrl: 'components/ct_footer/ct_footer.html',
      scope: {
        menuItems: '=menuItemsData',
        socialNetworkNavs: '=socialData'
      },
      link: function () {}
    };
  }
]);
