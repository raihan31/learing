'use strict';
angular.module('ctSignupApp')
  .directive('ctNavbar', [
    '$uibModal',
    function ($uibModal) {
      return {
        restrict: 'EA',
        templateUrl: 'components/ct_navbar/ct_navbar.html',
        scope: {
          menuItems: '=menuItemsData',
          socialNetworkNavs: '=socialData'
        },
        link: function ($scope) {
          $scope.openSignup = function () {
            $uibModal.open({
              animation: true,
              templateUrl: 'components/ct_modal_signup/ct_modal_signup.html',
              controller: 'SignUpModalCtrl'
            });
          };
        }
      };
    }
  ])
  .controller('SignUpModalCtrl', [
    '$scope',
    '$modalInstance',
    '$window',
    '$rootScope',
    function ($scope, $modalInstance, $window, $rootScope) {
      $rootScope.$on('signed-up', function (e, data) {
        fbq('track', 'CompleteRegistration');
        $window.location = 'http://www.coderstrust.com/students/' + data.student_id;
      });
    }
  ]);
