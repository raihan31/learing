'use strict';

angular.module('ctSignupApp')
.directive('ctLearningPathItem', [
  '$window',
  '$sce',
  function ($window, $sce) {
    return {
      restrict: 'AE',
      scope: {
        data: '='
      },
      transclude: true,
      templateUrl: 'components/ct_learning_path_item/ct_learning_path_item.html',
      link: function ($scope, element) {
        // var snap = $window.Snap;

        $scope.trustAsHtml = $sce.trustAsHtml;

        // $(element).hover(function () {
        //   $('header img', element).attr('src', $scope.data.imgWhiteUrl);
        // }, function () {
        //   $('header img', element).attr('src', $scope.data.imgUrl);
        // });

        // var svg = snap(60, 60);
        //
        // if ($scope.data.svgUrl) {
        //
        //   snap.load($scope.data.svgUrl, function (f) {
        //     console.log(f);
        //     svg.append(f);
        //
        //     $('header', element).append(svg);
        //   });
        // }
      }
    };
  }
]);
