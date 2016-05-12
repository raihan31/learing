'use strict';

angular.module('ctSignupApp')
  .controller('AboutCtrl', [
    '$scope',
    '$timeout',

    'ctWebpagesConfigDecorator',
    'map',
    'teamsData',
    'officesData',
    function ($scope, $timeout, ctWebpagesConfigDecorator, map, teamsData, officesData) {
      $scope.message = 'Hello';
      $scope.map = map;
      $scope.markers = map.markers;
      $scope.teams = teamsData;
      $scope.teams[0].active = true;
      $scope.activeTab = 0;
      $scope.offices = officesData;
      // ngMap.getMap().then(function (m) {
      //   $scope.ngMap = m;
      // });
      $timeout(ctWebpagesConfigDecorator, 200);

      $scope.isActive = function (index) {
        return $scope.activeTab === index;
      };

      $scope.showTab = function (index) {
        angular.forEach($scope.teams, function (item) {
          item.active = false;
        });
        $scope.activeTab = index;
        $scope.teams[index].active = true;
        $('.staff-slider').css('visibility', 'hidden');
        $timeout(function () {
          $('.staff-slider').slick('setPosition');
          $('.staff-slider').css('visibility', 'visible');
        }, 10);
      };
    }
]);
