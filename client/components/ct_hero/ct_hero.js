'use strict';

angular.module('ctSignupApp')
.directive('ctHero', [
  function () {
    return {
      restrict: 'AE',
      transclude: true,
      templateUrl: 'components/ct_hero/ct_hero.html',
      scope: {
        data: '=heroData'
      },
      link: function ($scope) {

      }
    };
  }
]);
