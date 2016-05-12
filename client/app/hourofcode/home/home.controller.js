'use strict';

angular.module('ctSignupApp')
.controller('HOCHomeCtrl', [
  '$scope',
  'heroData',
  'celebsData',
  'memberQuotesData',
  'partnersData',
  function ($scope, heroData, celebsData, memberQuotesData, partnersData) {
    $scope.heroData = heroData;
    $scope.endDate = new Date(2015, 11, 14);
    $scope.celebs = celebsData;
    $scope.memberQuotes = memberQuotesData;
    $scope.partners = partnersData;
    $scope.countOffset = function (length) {
      return ((length % 5) * 3 / 2).toString().replace(/\./, '');
    };

    $scope.isOffset = function (length, index) {
      return (length % 5) === (length - (index)) && (index !== 0);
    };
  }
]);
