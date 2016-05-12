'use strict';

angular.module('ctSignupApp')
.directive('ctTrackPane', [
  '$rootScope',
  function () {
    return {
      restrict: 'A',
      templateUrl: 'components/ct_track_pane/ct_track_pane.html',
      scope: {
        data: '=paneData'
      }
    };
  }
]);
