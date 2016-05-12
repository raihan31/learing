'use strict';

angular.module('ctStudentDashboard')
  .controller('StudentCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    'headData',
    'menuItemsData',
    'websiteMenuItems',
    'studentMenuItems',
    'socialNetworkNavs',
    function ($scope, $rootScope, $state, headData, menuItemsData, websiteMenuItems, studentMenuItems, socialNetworkNavs) {
      $scope.menuItemsData = menuItemsData;
      $scope.websiteMenuItems = websiteMenuItems;
      $scope.studentMenuItems = studentMenuItems;
      $scope.socialNetworkNavs = socialNetworkNavs;

      function changeHeadData(headData) {
        if (headData) {
          $rootScope.$broadcast('head:change', headData);
        }
      }

      changeHeadData(headData);

      $scope.$on('$stateChangeSuccess', function (event, next) {
        if (next.resolve && next.resolve.headData) {
          changeHeadData(next.resolve.headData());
        }
      });
    }
  ]);
