'use strict';

angular.module('ctSignupApp')
  .controller('EarnCtrl', [
    '$scope',
    '$timeout',
    'ctWebpagesConfigDecorator',
    'map',
    'successStoriesData',
    'customerReviewsData',
    function ($scope, $timeout, ctWebpagesConfigDecorator, map, successStoriesData, customerReviewsData) {
      $scope.map = map;
      $scope.markers = map.markers;
      $scope.successStories = successStoriesData;
      $scope.customerReviews = customerReviewsData;
      $timeout(ctWebpagesConfigDecorator, 200);
    }
  ]);
