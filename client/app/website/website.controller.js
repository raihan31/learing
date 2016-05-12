'use strict';

angular.module('ctSignupApp')
  .controller('WebsiteCtrl', [
    '$scope',
    '$state',
    '$rootScope',
    '$sce',
    'menuItems',
    'headData',
    'socialNetworkNavs',
    function ($scope, $state, $rootScope, $sce, menuItems, headData, socialNetworkNavs) {
      $scope.menuItems = menuItems;
      $scope.socialNetworkNavs = socialNetworkNavs;

      $scope.trustHtml = function(src) {
        return $sce.trustAsHtml(src);
      };

      function changeActiveNav(next) {
        angular.forEach(menuItems, function (item) {
          item.active = false;

          if (item.href == next.url) {
            item.active = true;
          }
        });
      }
      changeActiveNav($state.current);

      function changeHeadData(headData) {
        if (headData) {
          $rootScope.$broadcast('head:change', headData);
        }
      }
      changeHeadData(headData);

      $scope.$on('$stateChangeSuccess', function (event, next) {
        changeActiveNav(next);
        if (next.resolve && next.resolve.headData) {
          changeHeadData(next.resolve.headData());
        }
      });
    }
  ]);
