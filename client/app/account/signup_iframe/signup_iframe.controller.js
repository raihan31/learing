'use strict';

angular.module('ctSignupApp')
  .controller('SignupIframeCtrl', [
    '$scope',
    '$rootScope',
    '$window',
    '$state',
    function ($scope, $rootScope, $window, $state) {
      $scope.student = {
        hideSingUpNav: true,
        source: $state.params.source
      };

      $rootScope.$on('signed-up', function (e, data) {
        fbq('track', 'CompleteRegistration');
        $window.location = 'http://www.coderstrust.com/students/' + data.student_id;
      });
    }
  ]);
